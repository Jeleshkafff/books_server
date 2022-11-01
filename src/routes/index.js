import { Router } from "express";
import { booksRouter } from "./books";
import { authorRouter } from "./authors";
import { ganreRouter } from "./ganres";

export const appRouter = Router();
appRouter.use("/books", booksRouter);
appRouter.use("/authors", authorRouter);
appRouter.use("/ganers", ganreRouter);
