import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  serviceDomain: process.env.SERVER_DOMAIN as string || "",
  apiKey: process.env.API_KEY as string || "",
});
