import Identifiable from "../Identifiable";

export default interface Author extends Identifiable {
  /**
   * The name of the authors
   * @type {string}
   * @memberof BookModel
   */
  Name: string;
}
