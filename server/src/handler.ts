"use strict";

import { ApolloServer } from "apollo-server-lambda";
import resolvers from "./resolvers";
import typeDefs from "./schema/Query.graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports.graphqlHandler = server.createHandler();

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
