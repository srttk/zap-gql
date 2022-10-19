import { Resolvers } from "~/generated/graphql";

const HealthResolvers: Resolvers = {
  Query: {
    healthcheck: (_, __, context) => {
      return `OK from ${context?.app?.config?.SERVER_ID}`;
    },
  },
};
export default HealthResolvers;
