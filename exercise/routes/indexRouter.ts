import { Router } from "../deps.ts";
import hbs from "../shared/hbs.ts";

export function use(path: string, router: Router) {
  router.get(`${path}`, async (ctx) => {
    ctx.response.body = await hbs.renderView("index", { title: "Oak" });
  });
}
