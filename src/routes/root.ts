import { type FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    return { HomePage: true };
  });

  fastify.get("/health", async (request, reply) => {
    return reply.code(200).send({
      message: "Health of server is good",
    });
  });
};

export default root;
