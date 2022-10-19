import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/modules/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      config: {
        contextType: "../graphql.server#IContext",
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
