import { FastifyReply, FastifyRequest } from "fastify";
import decompressBody from "./decompressBody.js";
import { ErrorBucket } from "@/types/issue.js";
import { createNewIssue } from "./issue.service.js";

export const createNewIssueController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const sdk = request.sdk;

  const errData = decompressBody<ErrorBucket>(request);

  await createNewIssue(sdk, errData);

  return reply.code(201).send({
    success: true,
  });
};
