import z from "zod";
import { createIssueSchema } from "./issue.schema.js";

export type CreateIssueRequest = {
  Body: z.infer<typeof createIssueSchema>;
};
