import { Resolvers } from "~/generated/graphql";

const HealthResolvers: Resolvers = {
  Query: {
    healthcheck: () => `OK`,
  },
};
export default HealthResolvers;
