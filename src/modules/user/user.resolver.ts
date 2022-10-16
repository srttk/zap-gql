import { Resolvers } from "~/generated/graphql";

const users = [
  {
    name: "Sarath",
    email: "sarath@test.com",
    password: "1234",
  },
];

const UserResolvers: Resolvers = {
  Query: {
    users: () => {
      return users;
    },

    user(_, { email }) {
      const match = users.find((u) => u.email === email);
      return match;
    },
  },
  // Mutations

  Mutation: {
    add_user(_, { name, email }) {
      const newUser = { name, email, password: "1234" };
      users.push(newUser);
      return newUser;
    },
  },
};

export default UserResolvers;
