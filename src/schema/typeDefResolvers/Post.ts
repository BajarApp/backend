import { gql } from "apollo-server";
import { user } from "./Owner";
import { db } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";

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

  extend type Mutation {
    createPost(
      ownerId: String
      description: String
      title: String
      images: String
    ): String
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
  Mutation: {
    createPost: async (
      _: any,
      {
        ownerId,
        description,
        title,
        images,
      }: {
        ownerId: string;
        description: string;
        title: string;
        images: string[];
      }
    ) => {
      try {
        const generatedId = uuidv4();
        const docRef = await db.collection("posts").doc(generatedId).set({
          id: generatedId,
          ownerId,
          description,
          title,
          images,
        });
        return "Document written with ID: " + docRef;
      } catch (e) {
        return "Error adding document: " + e;
      }
    },
  },
};
