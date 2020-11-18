import { Handlebars } from "../deps.ts";

const handlebars = new Handlebars({
  baseDir: "views",
  extname: ".hbs",
  layoutsDir: "layouts/",
  partialsDir: "",
  defaultLayout: "main",
  helpers: undefined,
  compilerOptions: undefined,
})

export default handlebars;