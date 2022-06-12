import { gql } from "apollo-server";
import { db } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";

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
    createUser(description: String, minority: [String]): String
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
    createUser: async (
      _: any,
      { description, minority }: { description: string; minority: string[] }
    ) => {
      try {
        const generatedId = uuidv4();
        const docRef = await db.collection("users").doc(generatedId).set({
          id: generatedId,
          uid: generatedId,
          description: description,
          minority,
          posts: [],
        });
        return "Document written with ID: " + docRef;
      } catch (e) {
        return "Error adding document: " + e;
      }
    },
  },
};
