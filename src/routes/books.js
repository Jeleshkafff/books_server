import { Router } from "express";
import { booksController } from "../controllers";

// import {}
export const booksRouter = Router();
booksRouter.get("/", booksController.getBooks);
booksRouter.get("/:id", booksController.getBook);
booksRouter.post("/add", booksController.addBook) 
booksRouter.put("/update/:id", booksController.updateBook) 
booksRouter.delete("/delete/:id", booksController.deleteBook) 