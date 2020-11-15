import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx, next) => {
  console.log("This is middleware");
  next();
});

app.use((ctx, next) => {
  ctx.response.body = "Hello World";
});

console.log(`Now listening on http://0.0.0.0:3000`);
app.listen("0.0.0.0:3000");
