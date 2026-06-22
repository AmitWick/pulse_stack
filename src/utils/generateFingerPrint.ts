import crypto from "node:crypto";

function normalizeMessage(message: string) {
  return message.replace(/\d+/g, "*").replace(/[a-f0-9]{24}/g, "*");
}

const generateFingerPrint = (
  projectId: string,
  name: string,
  message: string,
) => {
  const fingerprintSource = [projectId, name, normalizeMessage(message)].join(
    "|",
  );

  return crypto.createHash("sha256").update(fingerprintSource).digest("hex");
};

export default generateFingerPrint;
