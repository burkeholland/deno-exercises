import { Application, Router } from "./deps.ts";
import * as indexRouter from "./routes/indexRouter.ts";
import * as usersRouter from "./routes/usersRouter.ts";

const app = new Application();
const router = new Router();

indexRouter.use("/", router);
usersRouter.use("/users", router);

app.use(router.routes());

console.log(`Now listening on http://0.0.0.0:3000`);
await app.listen("0.0.0.0:3000");
