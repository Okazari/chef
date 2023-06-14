import "dotenv/config";
import { connectClient } from "./data/client";
import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import schema from "./schema";

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
