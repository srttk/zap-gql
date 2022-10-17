import { createServer } from "@graphql-yoga/node";
import { useGraphQLModules } from "@envelop/graphql-modules";
import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { application } from "./schema";

// Graphql server

export function createGraphQLServer(app: FastifyInstance) {
  const graphQLServer = createServer<{
    req: FastifyRequest;
    reply: FastifyReply;
  }>({
    // Integrate Fastify logger
    logging: {
      debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
      info: (...args) => args.forEach((arg) => app.log.info(arg)),
      warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
      error: (...args) => args.forEach((arg) => app.log.error(arg)),
    },
    // Schema

    plugins: [useGraphQLModules(application)],

    context: ({ req, reply }) => {
      return {
        req,
        reply,
      };
    },
  });

  return graphQLServer;
}

export interface IContext {
  req: FastifyRequest;
  reply: FastifyReply;
}
