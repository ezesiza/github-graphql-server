const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const resolvers = require("./resolvers");
const typeDefs = require("./schema.graphql");
const port = process.env.PORT || 9000;

const app = express();
async function startApolloServer(){
  const server = new ApolloServer({ typeDefs, resolvers, persistedQueries: false, cache: "bounded" });
  await server.start();

  const path = "/graphql";
  server.applyMiddleware({ app, path, playground: true });
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  new Promise(resolve => app.listen({ port: port }, resolve));
  console.info(`🚀 Server ready at http://localhost:${port + server.graphqlPath}`)

}


module.exports = startApolloServer();