import { ConfigType } from "./env";
declare module "fastify" {
  interface FastifyInstance {
    config: ConfigType;
  }
}
