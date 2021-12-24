import { Resolvers } from "../../../generated/graphql"

const UserQueryResolver: Resolvers = {
    Query: {
        users: () => [{ name: "Sarath" }],
        user: (_, { id }, { }) => ({ name: "Sarath" })
    }
}


export default UserQueryResolver