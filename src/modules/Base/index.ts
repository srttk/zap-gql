import { join } from 'path'
import { createModule } from 'graphql-modules'
import { loadFilesSync } from '@graphql-tools/load-files';
export const BaseModule = createModule({
    id: "base-module",
    dirname: __dirname,
    typeDefs: loadFilesSync(join(__dirname, './typeDefs/*.graphql')),
    resolvers: loadFilesSync(join(__dirname, './resolvers/*.{js,ts}')),
})