import environment from "@/config/environment.js";
import crypto from "node:crypto";

const ALGORITHM = "aes-256-gcm";

const SECRET_KEY = crypto
  .createHash("sha256")
  .update(environment.ENCRYPTION_KEY)
  .digest();

export function encrypt(object: object = {}) {
  const now = Date.now();

  const expires_in: number = environment.ENCRYPTION_EXPIRE_IN
    ? environment.ENCRYPTION_EXPIRE_IN
    : 1000 * 60 * 60 * 24 * 365 * 10; // 10 years

  const addTime = {
    ...object,
    iat: now,
    exp: now + expires_in,
  };

  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);

  let encrypted = cipher.update(JSON.stringify(addTime), "utf8", "hex");

  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag();

  return [iv.toString("hex"), authTag.toString("hex"), encrypted].join(":");
}

export function decrypt<T = unknown>(encryptedText: string): T {
  try {
    const parts = encryptedText.split(":");

    if (parts.length !== 3) {
      throw new Error("Invalid encrypted payload format");
    }

    const [ivHex, authTagHex, encrypted] = parts;

    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      SECRET_KEY,
      Buffer.from(ivHex, "hex"),
    );

    decipher.setAuthTag(Buffer.from(authTagHex, "hex"));

    let decrypted = decipher.update(encrypted, "hex", "utf8");

    decrypted += decipher.final("utf8");

    const payload = JSON.parse(decrypted);

    if (typeof payload.exp === "number" && payload.exp < Date.now()) {
      throw new Error("Token expired");
    }
    return payload as T;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Invalid or tampered encrypted payload";
    throw new Error(message);
  }
}
