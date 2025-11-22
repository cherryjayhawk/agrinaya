import { MongoClient, MongoClientOptions } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const options: MongoClientOptions = {
  appName: "devrel.vercel.integration",
  maxIdleTimeMS: 5000,
};
if (!process.env.MONGODB_URI) {
  throw new Error("Environment variable is not defined");
}
const client = new MongoClient(process.env.MONGODB_URI, options);

attachDatabasePool(client);

let clientPromise: Promise<MongoClient> | null = null;

export async function getClient(): Promise<MongoClient> {
  if (!clientPromise) {
    clientPromise = client.connect().then(() => client).catch((err) => {
      clientPromise = null;
      throw err;
    });
  }
  return clientPromise;
}
