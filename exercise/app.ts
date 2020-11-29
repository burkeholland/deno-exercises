import { Application, Router, send } from "./deps.ts";
import * as indexRouter from "./routes/indexRouter.ts";
import * as usersRouter from "./routes/usersRouter.ts";

const HOST = "0.0.0.0";
const PORT = Deno.env.get("PORT") || 3000;

const app = new Application();
const router = new Router();

// static assets
router.get("/public/:path+", async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: Deno.cwd(),
  });
});

indexRouter.use("/", router);
usersRouter.use("/users", router);

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("error", (err) => {
  console.log(err);
});

console.log(`Now listening on http://${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);
