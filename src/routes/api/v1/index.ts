import { FastifyPluginAsync } from "fastify";
import protectedRoutes from "./protected.js";
import sdkRoutes from "./sdk.js";

const apiV1: FastifyPluginAsync = async (fastify) => {
  // SDK ROUTES
  fastify.register(sdkRoutes);

  // PROTECTED ROUTES
  fastify.register(protectedRoutes);
};

export default apiV1;
