import { ApolloServer } from "apollo-server";
import { schema } from "./schema/schema";

const server = new ApolloServer({ schema, csrfPrevention: true });

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
