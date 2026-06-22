import type { SessionAuthObject } from "@clerk/fastify";
import "fastify";
import type { SDK_ENCRYPTION_OBJECT } from "./sdk.js";

declare module "fastify" {
  interface FastifyRequest {
    auth: SessionAuthObject;
    sdk: SDK_ENCRYPTION_OBJECT;
  }

  interface FastifyInstance {
    authenticateClerk(
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<void>;
  }

  interface FastifyInstance {
    authenticateSdk(
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<void>;
  }
}
