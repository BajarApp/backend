import { ApolloServer } from "apollo-server";
import { schema } from "./schema/schema";
// import { getAuth } from "firebase-admin/auth";

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  // context: ({ req }) => {
  //   const token = req.headers.authorization || "";
  //   getAuth()
  //     .verifyIdToken(token)
  //     .then((decodedToken) => {
  //       const uid = decodedToken;

  //       return { user: uid };
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.log(error);
  //     });
  // },
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
