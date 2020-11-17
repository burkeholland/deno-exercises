import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  
  router.get(`${path}`, async (ctx) => {
    ctx.response.body = "Welcome to Oak";
  });
  
}
