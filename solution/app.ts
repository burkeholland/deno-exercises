import { Application, Router } from "./deps.ts";
import indexRouter from "./routes/indexRouter.ts";
import userRouter from "./routes/userRouter.ts";

const app = new Application();

app.use(indexRouter.routes());
app.use(userRouter.routes());

console.log(`Now listening on http://0.0.0.0:3000`);
await app.listen("0.0.0.0:3000");
