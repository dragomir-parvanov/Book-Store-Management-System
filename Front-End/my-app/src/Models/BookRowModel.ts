import BookModel from "./BookModel";

/**
 * A model which represents the book the way
 * it should be represented in the table as a row.
 * @export
 * @interface BookRowModel
 * @extends {BookModel}
 */
export default interface BookRowModel extends BookModel {
  /**
   * The profit after tax.
   * @type {number}
   * @memberof BookRowModel
   */
  Profit: number;

  /**
   * The profit of all total sales.
   * @type {number}
   * @memberof BookRowModel
   */
  TotalProfit: number;
}
