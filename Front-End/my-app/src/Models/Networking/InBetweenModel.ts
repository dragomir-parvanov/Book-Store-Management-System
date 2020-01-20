import Identifiable from "../Identifiable";
import BookModel from "../Book/BookModel";

/**
 * Representing the already downloaded entities,
 * which needs to be placed after the just downloaded entities.
 * @export
 * @interface InBetweenModel
 */
export default interface InBetweenModel {
  /**
   * the book after we place the books that we had downloaded before.
   * @type {BookModel}
   * @memberof InBetweenModel
   */
  book: BookModel;

  /**
   * the entities after the book that we just downloaded.
   * @type {Identifiable[]}
   * @memberof InBetweenModel
   */
  entities: Identifiable[];
}
