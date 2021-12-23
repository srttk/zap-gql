// import 'graphql-import-node';
import { createApplication } from 'graphql-modules'
import { BaseModule } from './modules/Base'
import { ApolloServer } from 'apollo-server'

const application = createApplication({
    modules: [BaseModule]
})


const server = new ApolloServer({
    schema: application.createSchemaForApollo(),

})


server.listen().then(({ url }) => {


    console.log(`Apollo server running on ${url}`)
})
