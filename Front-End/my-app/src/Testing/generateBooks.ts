import BookModel from "../Models/Book/BookModel";

export function generateBook(): BookModel {
  const book: BookModel = {
    Authors: ["Pesho", "Ivan"],
    Genres: ["crime"],
    DateReleased: new Date(),
    Name: "Test name",
    SupplyPrice: 1,
    RetailPrice: 1.3,
    TotalProfit: 0.1,
    Sales: 1,
    Profit: 0.1,
    Id: "1"
  };

  return book;
}

export function generateBooks(count: number): BookModel[] {
  const books: BookModel[] = [];
  for (let i = 0; i < count; i++) {
    books.push(generateBook());
  }
  return books;
}
