import { Router } from "../deps.ts";

const router = new Router();

router.get("/users", (ctx) => {
  ctx.response.body = `Welcome User`;
});

router.get("/users/:name", (ctx) => {
  ctx.response.body = `Welcome ${ctx.params.name}`;
});

export default router;
