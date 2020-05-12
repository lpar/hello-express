import express, { Request, RequestHandler, Response } from "express";
import path from "path";
import expressHandlebars from "express-handlebars";
import fortune from "./fortune"

const __dirname = path.resolve();

const app = express();

const port = process.env.PORT || 3000;

// configure Handlebars view engine
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// configure static file server
app.use(express.static(path.join(__dirname, '/public')));

// everything else is a dynamic page
app.get("/", (req: Request, res: Response) => res.render("home"));

app.get("/about", (req: Request, res: Response) => {
  res.render("about", {fortune: fortune()});
});

// custom 404 page
app.use((req: Request, res: Response) => {
  res.status(404);
  res.render("404");
});

// custom 500 page
app.use((err: Error, req: Request, res: Response, _next: RequestHandler) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));

