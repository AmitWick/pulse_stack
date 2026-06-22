import { SDK_ENCRYPTION_OBJECT } from "@/types/sdk.js";
import { decrypt } from "@/utils/encryption/encrypt.js";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
  fastify.decorate("authenticateSdk", async (request, reply) => {
    const token = getBearerToken(request.headers.authorization);

    if (!token) {
      return reply.code(401).send({
        message: "Unauthorized",
      });
    }

    const decrypted = decrypt<SDK_ENCRYPTION_OBJECT>(token);

    request.sdk = decrypted;
  });
});

function getBearerToken(authorization?: string) {
  if (!authorization) {
    return null;
  }

  if (!authorization.startsWith("Bearer ")) {
    return null;
  }

  return authorization.substring(7);
}
