import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  router.get(`${path}`, async (ctx) => {
    ctx.response.body = "Welcome User";
  });

  router.get(`${path}/:name`, async (ctx) => {
    ctx.response.body = `Welcome ${ctx.params.name}`;
  });
}
