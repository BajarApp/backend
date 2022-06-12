import { gql } from "apollo-server";
import { merge } from "lodash";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  typeDefs as Owner,
  resolvers as OwnerResolvers,
} from "../schema/typeDefResolvers/Owner";

import {
  typeDefs as Post,
  resolvers as PostResolvers,
} from "../schema/typeDefResolvers/Post";

const Query = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Owner, Post],
  resolvers: merge(resolvers, OwnerResolvers, PostResolvers),
});
