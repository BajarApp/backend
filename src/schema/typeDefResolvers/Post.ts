import { gql } from "apollo-server";
import { user } from "./Owner";

export const typeDefs = gql`
  type Post {
    id: String!
    owner: Owner!
    description: String!
    title: String!
    images: [String]
  }

  extend type Query {
    getPost(id: String!): Post
  }
`;

const thing = {
  id: "idek",
  owner: user,
  description: "thingy",
};

export const resolvers = {
  Query: {
    getPost: (_: any, { id }: { id: string }) => {
      console.log(id);
      return thing;
    },
  },
};
