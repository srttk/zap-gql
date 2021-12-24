import { ApolloServer } from 'apollo-server'
import { ApolloSchema } from './schema'
import { Logger } from './lib/Logger'



const server = new ApolloServer({
    schema: ApolloSchema,
    context: () => {
        return {
            logger: Logger
        }
    }

})


server.listen().then(({ url, port }) => {

    console.log(`Server listrning on port ${port}`)
    console.log(url)
})

