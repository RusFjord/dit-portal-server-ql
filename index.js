import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers.js'

import sheduler from './reglaments/sheduler.js'
sheduler()
const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers
})

server.start(() => console.log('Сервер работает'))