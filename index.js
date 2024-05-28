const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const cors = require("cors");
const fs = require("fs");
const resolvers = require("./resolvers");
// const typeDefs = gql`
//   ${fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")}
// `;

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
  // app.listen(port, () => console.info(`Server started on port ${port}`));
  new Promise(resolve => app.listen({ port: port }, resolve));
  console.info(`🚀 Server ready at http://localhost:${port + server.graphqlPath}`)

}




// startApolloServer()

// module.exports = app;
module.exports = startApolloServer();
