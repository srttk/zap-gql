import { createApplication } from "graphql-modules";
import { UserModule } from "./modules/user";
import { TestModule } from "./modules/test";

export const application = createApplication({
  modules: [TestModule, UserModule],
});

export const scheme = application.schema;
