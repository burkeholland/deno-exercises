import { Router } from "../deps.ts";
import hbs from "../utils/hbs.ts";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.response.body = await hbs.renderView("index", { title: "Oak" });
});

export default router;
