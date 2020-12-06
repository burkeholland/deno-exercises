import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ hostname: HOSTNAME, port: PORT });

console.log(`Server is now running on: http://${HOSTNAME}:${PORT}`);

// listen for requests
for await (const req of server) {
  req.respond({
    body: "Hello World",
  });
}
