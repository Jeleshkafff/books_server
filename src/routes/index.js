import { Router } from "express";
import { booksRouter } from "./books";

export const appRouter = Router();
appRouter.use("/books", booksRouter);
