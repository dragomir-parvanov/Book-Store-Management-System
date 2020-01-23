import Identifiable from "../Identifiable";
import Author from "./Author";
import Genre from "./Genre";

/**
 * A book model, usually this comes from the API.
 *
 * @export
 * @interface BookModel
 */
export default interface BookModel extends Identifiable {
  Author: Author;

  Genre: Genre;

  /**
   *The book name.
   * @type {string}
   * @memberof BookModel
   */
  Name: string;

  /**
   * The date that the book was released.
   * @type {Date}
   * @memberof BookModel
   */
  DateReleased: Date;

  /**
   * The price that the customers pays.
   * @type {number}
   * @memberof BookModel
   */
  RetailPrice: number;

  /**
   * The price we buy the book from the supplier.
   * @type {number}
   * @memberof BookModel
   */
  SupplyPrice: number;

  /**
   *Total amount of sales
   *
   * @type {number}
   * @memberof BookModel
   */
  Sales: number;
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
