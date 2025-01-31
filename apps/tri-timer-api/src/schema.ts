/**
 * This is test schema for the tri-timer-api
 * It will be replaced by typeDefs and resolvers from libs.
 */
import { gql } from "@apollo/client";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const exampleQuery = gql`
  type Query {
    hello(name: String!): String!
  }
  type Mutation {
    createHello(name: String!): String!
  }
`;

const exampleResolver = {
  Query: {
    hello: (_: unknown, { name }: { name: string }) => `Hello ${name}!`,
  },
  Mutation: {
    createHello: (_: unknown, { name }: { name: string }) => `Hello nwely created ${name}!`,
  }
};

const typeDefs = [
  exampleQuery,
]

const resolvers = [
  exampleResolver,
]

export const schema = makeExecutableSchema({
  resolvers: mergeResolvers(resolvers),
  typeDefs: mergeTypeDefs(typeDefs),
});

