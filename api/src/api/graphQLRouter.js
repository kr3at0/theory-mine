import { makeExecutableSchema } from 'graphql-tools'
import { userType, userResolvers } from './resources/user'
import { collectionType, collectionResolvers } from './resources/collection'
import { entryType, entryResolvers } from './resources/entry'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    userType,
    entryType,
    collectionType
  ],
  resolvers: merge(
    {},
    userResolvers,
    entryResolvers,
    collectionResolvers
  )
})


export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))
