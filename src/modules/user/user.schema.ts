import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userSchemaArray = z.array(userSchema);

export const createUserBodySchema = userSchema.pick({
  name: true,
  email: true,
});

export const getUserByIdParamSchema = userSchema.pick({
  id: true,
});
