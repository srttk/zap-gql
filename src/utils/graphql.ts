import { createModule } from "graphql-modules";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "node:path";

export function makeModule({ id, dirname }: { id: string; dirname: string }) {
  return createModule({
    id,
    dirname,
    typeDefs: loadFilesSync(join(dirname, "./*.graphql")),
    resolvers: loadFilesSync(join(dirname, "./*.resolvers.ts")),
  });
}
