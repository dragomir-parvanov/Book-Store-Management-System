import BookModel from "./Book/BookModel";

export default interface ShouldRenderOrAppendModel {
  /**
   * If this is true, we should re-render the whole collection that is passed to Books
   * If this is false, we should only append the books to the existing collection.
   * @type {boolean}
   * @memberof ShouldRenderOrAppendModel
   */
  value: boolean;
  Books: BookModel[];
}
