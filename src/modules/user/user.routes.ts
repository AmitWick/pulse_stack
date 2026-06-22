import { FastifyPluginAsync } from "fastify";
import {
  createUserController,
  getUserByIdController,
  getUsersController,
} from "./user.controller.js";
import {
  createUserBodySchema,
  getUserByIdParamSchema,
  userSchema,
  userSchemaArray,
} from "./user.schema.js";

const userRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    "/",
    {
      schema: {
        response: {
          200: userSchemaArray,
        },
      },
    },
    getUsersController,
  );

  fastify.get(
    "/:id",
    {
      schema: {
        params: getUserByIdParamSchema,
        response: {
          200: userSchema,
        },
      },
    },
    getUserByIdController,
  );

  fastify.post(
    "/",
    {
      schema: {
        body: createUserBodySchema,
        response: {
          201: userSchema,
        },
      },
    },
    createUserController,
  );
};

export default userRoutes;
