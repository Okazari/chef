import client from "./client";

export const getAllRecipes = () => client.query("SELECT * FROM recipes");

export const createRecipe = ({ name }) =>
  client.query(`INSERT INTO recipes (name) VALUES ('${name}') RETURNING *`);
