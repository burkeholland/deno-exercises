import { Application, Router, send } from "./deps.ts";
import * as indexRouter from "./routes/indexRouter.ts";
import * as usersRouter from "./routes/usersRouter.ts";

const PORT = Deno.env.get("PORT") || 3000;

const app = new Application();
const router = new Router();

indexRouter.use("/", router);
usersRouter.use("/users", router);

// static assets
router.get("/public/:path+", async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: Deno.cwd(),
  });
});

app.use(router.routes());

app.addEventListener("error", (err) => {
  console.log(err);
});

console.log(`Now listening on http://0.0.0.0:${PORT}`);
await app.listen(`0.0.0.0:${PORT}`);
