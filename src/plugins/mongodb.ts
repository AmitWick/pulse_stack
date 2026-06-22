import fp from "fastify-plugin";
import mongoose from "mongoose";

import environment from "../config/environment.js";

export default fp(async (fastify) => {
  await mongoose.connect(environment.MONGODB_URI);

  fastify.log.info("MongoDB Connected");

  fastify.addHook("onClose", async () => {
    await mongoose.connection.close();
  });
});
