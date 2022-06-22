
import {ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4onmbyi0sfd01w7gonn88n0/master',
    cache: new InMemoryCache()
})