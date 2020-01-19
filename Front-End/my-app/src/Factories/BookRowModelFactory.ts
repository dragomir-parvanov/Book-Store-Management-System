import BookModel from "../Models/BookModel";
import BookRowModel from "../Models/BookRowModel";
import { calculateProfit } from "../Functions/CalculateProfit";

/**
 *Creates the book the way it should be represented in the table as a row.
 * @export
 * @param {BookModel} book
 * @returns {BookRowModel}
 */
export default function createBookRowModel(book: BookModel): BookRowModel {
  const profit = calculateProfit(book);
  const totalProfit = 0;

  const BookRow: BookRowModel = {
    Id: "1",
    Name: book.Name,
    Author: book.Author,
    Genre: book.Genre,
    DateReleased: book.DateReleased,
    RetailPrice: book.RetailPrice,
    SupplyPrice: book.SupplyPrice,
    Sales: book.Sales,
    Profit: profit,
    TotalProfit: totalProfit
  };

  return BookRow;
}
