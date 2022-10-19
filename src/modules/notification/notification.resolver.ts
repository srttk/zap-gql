import { createPubSub } from "@graphql-yoga/node";
import { Resolvers } from "~/generated/graphql";

const pubSub = createPubSub<{ notification: [message: string] }>();

const NotificationResolver: Resolvers = {
  Subscription: {
    notifications: {
      subscribe: () => pubSub.subscribe("notification"),
      resolve: (payload) => payload,
    },
  },
  Mutation: {
    notify: (_, { message }) => {
      pubSub.publish("notification", message);
      return message;
    },
  },
};

export default NotificationResolver;
