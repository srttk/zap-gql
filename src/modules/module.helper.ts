import { join } from 'path'
import { createModule } from 'graphql-modules'
import { loadFilesSync } from '@graphql-tools/load-files';

export function makeModule(id: string, dir: string) {

    return createModule({
        id: id,
        dirname: dir,
        typeDefs: loadFilesSync(join(dir, './typeDefs/*.graphql')),
        resolvers: loadFilesSync(join(dir, './resolvers/*.{js,ts}')),
    })

}