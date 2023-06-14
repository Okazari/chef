import "dotenv/config";
import { getAllRecipes, createRecipe, deleteRecipe } from "./data/recipes";
import { createSchema } from "graphql-yoga";

export default createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      recipes: [Recipe]!
    }
    type Mutation {
      createRecipe(name: String!): Recipe
      deleteRecipe(id: ID!): ID
    }

    type Recipe {
      id: ID!
      name: String!
    }
  `,
  resolvers: {
    Query: {
      recipes: async () => (await getAllRecipes()).rows,
    },
    Mutation: {
      createRecipe: async (_, params) => (await createRecipe(params)).rows[0],
      deleteRecipe: async (_, params) => {
        await deleteRecipe(params);
        return params.id;
      },
    },
  },
});
