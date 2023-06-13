import { Client } from "pg";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export const connectClient = async () => await client.connect();

export default client;
