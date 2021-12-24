import { ILogger } from '../lib/Logger'
export interface IContext {
    logger: ILogger
}

declare global {
    namespace GraphQLModules {
        interface GlobalContext extends IContext {

        }
    }
}