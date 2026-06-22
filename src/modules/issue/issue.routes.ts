import { FastifyPluginAsync } from "fastify";
import { createNewIssueController } from "./issue.controller.js";
import { createIssueSchema } from "./issue.schema.js";

const issueRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", async (request, reply) => {
    return reply.code(201).send({
      message: "Issue here",
    });
  });

  fastify.post(
    "/",
    {
      schema: {
        body: createIssueSchema,
      },
    },
    createNewIssueController,
  );
};

export default issueRoutes;
