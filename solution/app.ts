import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ hostname: HOSTNAME, port: PORT });

console.log(`Server is now running on: http://${HOSTNAME}:${PORT}`);

for await (const req of server) {
  let fileToServe = "";
  switch (req.url) {
    case "/":
      fileToServe = "index.html";
      break;
    case "/about":
      fileToServe = "about.html";
      break;
    default:
      fileToServe = "404.html";
  }

  const html = await serveFile(req, fileToServe);
  req.respond(html);
}
