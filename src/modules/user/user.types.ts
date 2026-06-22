import { z } from "zod";
import {
  createUserBodySchema,
  getUserByIdParamSchema,
  userSchema,
} from "./user.schema.js";

export type UserType = z.infer<typeof userSchema>;

export type CreateUserRequest = {
  Body: z.infer<typeof createUserBodySchema>;
};

export type GetUserByIdRequest = {
  Params: z.infer<typeof getUserByIdParamSchema>;
};
