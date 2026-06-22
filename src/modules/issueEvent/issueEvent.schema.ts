import z from "zod";

export const createNewIssueEventSchema = z.object({
  environment: z
    .enum(["development", "staging", "production"])
    .default("production"),
  stack: z.string(),
  code: z.string(),
  level: z.enum(["fatal", "error", "warning", "info"]).default("error"),
  server: {
    hostname: z.string(),
    region: z.string(),
  },
  route: z.string(),
  request: {
    method: z.string(),
    url: z.string(),
    path: z.string(),
    query: z.string(),
    body: z.string(),
    headers: z.string(),
  },
  runtime: {
    nodeVersion: z.string(),
    platform: z.string(),
    memoryUsage: z.coerce.number(),
    cpuUsage: z.coerce.number(),
    ip: z.string(),
  },

  //     // Release Tracking
  release: z.string(),

  //     // Browser
  browser: {
    name: z.string(),
    version: z.string(),
  },

  //     // Device
  device: z.string(),

  //     // Tags
  tags: z.array(z.string()),

  //     // Extra Data
  metadata: z.string(),

  //     // SDK info
  sdk: {
    name: z.string(),
    version: z.string(),
  },
});
