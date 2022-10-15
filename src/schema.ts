import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const resolver = {
  Query: {
    hello: () => `Hello`,
  },
};

const typed = `
type Query {
    hello: String
  }
`;

export const typeDefs = mergeTypeDefs([typed]);

export const resolvers = mergeResolvers([resolver]);
