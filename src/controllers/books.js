import { booksService } from "../services";

export async function getBooks(req, res) {
  let book = await booksService.getBooks();
  res.json(book);
}
export async function getBook(req, res) {
  const id = req.params.id;
  let book = await booksService.getBook(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
export async function addBook(req, res) {
  const author = req.body.author
  const ganre = req.body.ganre
  const name_book = req.body.name_book
  const amount = req.body.amount
  let response = await booksService.addBook(author,ganre,name_book,amount)
  res.json(response)
}
export async function updateBook(req, res){
  const id = req.params.id;
  const el = req.body
  let update =  await booksService.updateBook(id, el)
  res.json(update)
}
export async function deleteBook(req, res) {
  const id = req.params.id;
  let book = await booksService.deleteBook(id);
  res.json(book);
}