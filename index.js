const { ApolloServer, UserInputError, gql } = require('apollo-server')
const { v1: uuid } = require('uuid')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const persons = require('./data')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
