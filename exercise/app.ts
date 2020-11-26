import { serve } from "https://deno.land/std/http/server.ts";

import routeParser from "https://dev.jspm.io/route-parser@0.0.5";
import RouteParser from "https://unpkg.com/@types/route-parser@0.1.3/index.d.ts";

const Route = routeParser as typeof RouteParser;

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ hostname: HOSTNAME, port: PORT });

console.log(`Server is now running on: http://${HOSTNAME}:${PORT}`);

const route = new Route("/:name");

for await (const req of server) {
  const match: any = route.match(req.url);
  if (match.name) {
    req.respond({ body: `Hello, ${match.name}` });
  } else {
    req.respond({ body: "Please pass a name route." });
  }
}
