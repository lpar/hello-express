import express, { Request, RequestHandler, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.type("text/plain");
  res.send("Hello world");
});

app.get("/about", (req: Request, res: Response) => {
  res.type("text/plain");
  res.send("About hello world");
});

// custom 404 page
app.use((req: Request, res: Response) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 not found");
});

// custom 500 page
app.use((err: Error, req: Request, res: Response, next: RequestHandler) => {
  console.error(err.message);
  res.type("text/plain");
  res.status(500);
  res.send("500 server error");
});

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));

