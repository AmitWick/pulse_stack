import issueRoutes from "@/modules/issue/issue.routes.js";
import { FastifyPluginAsync } from "fastify";

const sdkRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", fastify.authenticateSdk);

  fastify.register(issueRoutes, {
    prefix: "/issues",
  });
};

export default sdkRoutes;
