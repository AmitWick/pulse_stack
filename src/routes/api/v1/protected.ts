import userRoutes from "@/modules/user/user.routes.js";
import { FastifyPluginAsync } from "fastify";

const protectedRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", fastify.authenticateClerk);

  fastify.register(userRoutes, {
    prefix: "/users",
  });
};

export default protectedRoutes;
