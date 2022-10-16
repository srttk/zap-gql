import { createModule } from "graphql-modules";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "node:path";

type ModuleOptions = {
  id: string;
  dirname: string;
};

export function makeModule({ id, dirname }: ModuleOptions) {
  return createModule({
    id,
    dirname,
    typeDefs: loadFilesSync(join(dirname, "./**/*.graphql")),
    resolvers: loadFilesSync(
      join(dirname, "./**/*.{resolver,resolvers}.{js,ts}")
    ),
  });
}
