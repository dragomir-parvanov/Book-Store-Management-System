import BookModel from "../../Models/Book/BookModel";
import { ServerResponseModel } from "../../Models/Networking/ServerResponseModel";
import { downloadedBooks } from "../../Observables/booksObservable";

/**
 * Builds a render of a BookModel[] the way it should be represented in the table.
 * @export
 * @param {ServerResponseModel} serverResponse
 * @returns {BookModel[]}
 */
export function buildRender(serverResponse: ServerResponseModel): BookModel[] {
  const buildedRender: BookModel[] = [];
  serverResponse.beforeAll.forEach(entity => {
    const book = downloadedBooks.find(b => b.Id === entity.Id);
    if (!book) {
      throw new Error(`We should had downloaded book with id "${entity.Id}" but its not present in our downloaded book collection`);
    }
    buildedRender.push(book);
  });

  serverResponse.inBetween.forEach(entityPlacement => {
    buildedRender.push(entityPlacement.book);
    entityPlacement.entities.forEach(entity => {
      const book = downloadedBooks.find(book => book.Id === entity.Id);
      if (!book) {
        throw new Error(`We should had downloaded book with id "${entity.Id}" but its not present in our downloaded book collection`);
      }
      buildedRender.push(book);
    });
  });
  return buildedRender;
}
