import "dotenv/config";
import { connectClient } from "./data/client";
import { getAllRecipes, createRecipe } from "./data/recipes";
import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "node:http";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      recipes: [Recipe]!
    }
    type Mutation {
      createRecipe(name: String): Recipe
    }

    type Recipe {
      id: String!
      name: String!
    }
  `,
  resolvers: {
    Query: {
      recipes: async () => (await getAllRecipes()).rows,
    },
    Mutation: {
      createRecipe: async (_, params) => (await createRecipe(params)).rows[0],
    },
  },
});

const yoga = createYoga({ schema });
const server = createServer(yoga);

let connected = false;

const run = async () => {
  while (!connected) {
    try {
      await connectClient();
      connected = true;
    } catch {}
  }
  const serverPort = process.env.PORT ?? 3010;
  server.listen(serverPort, () => {
    console.info(`Server is running on http://localhost:${serverPort}/graphql`);
  });
};

run();
