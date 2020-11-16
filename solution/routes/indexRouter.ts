import { Router } from "../deps.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Welcome to Oak";
});

export default router;
