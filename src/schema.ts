import { createApplication } from "graphql-modules";
import { UserModule } from "./modules/user";

export const application = createApplication({
  modules: [UserModule],
});

export const scheme = application.schema;
