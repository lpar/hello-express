
import fortune from "./fortune";
import { Request, RequestHandler, Response } from "express";

const home = (req: Request, res: Response) => res.render("home");

const about = (req: Request, res: Response) =>
  res.render("about", {fortune: fortune()});

const notFound = (req: Request, res: Response) => {
  res.status(404);
  res.render("404");
};

const serverError = (err: Error, req: Request, res: Response, _next: RequestHandler) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
};

export default {
  "home": home,
  "about": about,
  "notFound": notFound,
  "serverError": serverError
};

