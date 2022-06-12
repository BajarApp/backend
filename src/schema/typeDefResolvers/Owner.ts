import { gql } from "apollo-server";

export const typeDefs = gql`
  type Owner {
    uid: String!
    id: String!
    description: String!
    posts: [Post]
    minority: [String]
  }

  extend type Query {
    getBusiness(id: String!): Owner
  }

  extend type Mutation {
    editDescription(description: String): String
  }
`;

export let user = {
  uid: "32423423",
  id: "uuid",
  description: "I like hambuger",
  minority: "IDK",
};

export const resolvers = {
  Query: {
    getBusiness: (_: any, { id }: { id: string }) => {
      console.log(id);
      return user;
    },
  },
  Mutation: {
    editDescription: (_: any, { description }: { description: string }) => {
      user.description = description;
      return "Updated";
    },
  },
};
