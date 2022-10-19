import { Resolvers } from "~/generated/graphql";
import { users, createUser, findUser } from "./user.model";

const UserResolvers: Resolvers = {
  Query: {
    users: () => {
      return users;
    },

    user(_, { email }) {
      return findUser(email);
    },
  },
  // Mutations

  Mutation: {
    add_user(_, { name, email }) {
      const u = createUser({ name, email });
      return u;
    },
  },
};

export default UserResolvers;
