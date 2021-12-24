import { createApplication } from 'graphql-modules'
import { UserModule } from './modules/User'
const application = createApplication({
    modules: [UserModule]
})


export const ApolloSchema = application.createSchemaForApollo()

export default application.schema