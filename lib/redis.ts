import { createClient } from "redis";

if (!process.env.REDIS_URL) {
  throw new Error("Environment variable is not defined");
}

const redis = await createClient({ url: process.env.REDIS_URL }).connect();

export { redis };
