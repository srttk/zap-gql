import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import FastifyEnv from "@fastify/env";
import { createServer } from "@graphql-yoga/node";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { application } from "./schema";
import { createGraphQLServer } from "./graphql.server";
import { envOptions } from "~/config/env";

export async function createApp() {
  const app = Fastify({
    logger: true,
  });

  // Register fastify Plugins and setup

  app.register(FastifyEnv, envOptions);

  // Fastify Routes

  // Create GrahpQL server
  const graphQLServer = createGraphQLServer(app);

  // register Graphql Route
  /**
   * We pass the incoming HTTP request to GraphQL Yoga
   * and handle the response using Fastify's `reply` API
   * Learn more about `reply` https://www.fastify.io/docs/latest/Reply/
   **/
  app.route({
    url: "/graphql",
    method: ["GET", "POST", "OPTIONS"],
    async handler(req: FastifyRequest, reply: FastifyReply) {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await graphQLServer.handleIncomingMessage(req, {
        req,
        reply,
      });
      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });

      reply.status(response.status);

      reply.send(response.body);

      return reply;
    },
  });

  await app.ready();

  return app;
}
