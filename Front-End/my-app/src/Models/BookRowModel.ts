import BookModel from "./BookModel";

export default interface BookRowModel extends BookModel {
  Profit: number;
  TotalProfit: number;
}
