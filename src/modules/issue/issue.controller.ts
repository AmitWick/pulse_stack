import { FastifyRequest } from "fastify";
import { CreateIssueRequest } from "./issue.types.js";

export const createNewIssueController = async (
  request: FastifyRequest<CreateIssueRequest>,
) => {
  const { projectId, id, email, name } = request.sdk;

  const {} = request.body;
};
