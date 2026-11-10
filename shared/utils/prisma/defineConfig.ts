import "dotenv/config";
import { defineConfig, env } from "prisma/config";

const directUrl = env("DIRECT_URL");

console.log("DIRECT_URL PORT:", new URL(directUrl).port);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: directUrl,
  },
});
