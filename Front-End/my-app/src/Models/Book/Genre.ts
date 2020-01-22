import Identifiable from "../Identifiable";

export default interface Genre extends Identifiable {
  /**
   * The genres of the book.
   * @type {string}
   * @memberof BookModel
   */
  Name: string;
}
