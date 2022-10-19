import { createApplication } from "graphql-modules";
import { UserModule } from "./modules/user";
import { TestModule } from "./modules/test";
import { NotificationModule } from "./modules/notification";

export const application = createApplication({
  modules: [TestModule, UserModule, NotificationModule],
});

export const scheme = application.schema;
