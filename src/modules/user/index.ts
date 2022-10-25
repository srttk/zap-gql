import { makeModule } from "~/utils/graphql";
import { isAuthenticated } from "~/middlewares/auth.middleware";
export const UserModule = makeModule("user-module", {
  dirname: __dirname,
  middlewares: {
    Query: {
      user: [isAuthenticated],
    },
  },
});
