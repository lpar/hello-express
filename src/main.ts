import express, { Request, RequestHandler, Response } from "express";
import path from "path";
import expressHandlebars from "express-handlebars";
import fortune from "./fortune"
import handlers from "./handlers"

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

app.get("/", handlers.home);
app.get("/about", handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));

