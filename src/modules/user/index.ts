import { makeModule } from "~/utils/graphql";

export const UserModule = makeModule("user-module", {
  dirname: __dirname,
});
