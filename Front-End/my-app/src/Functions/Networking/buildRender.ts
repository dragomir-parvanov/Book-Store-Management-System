import BookModel from "../../Models/Book/BookModel";
import { EntitiesPlacementModel } from "../../Models/Networking/EntitiesPlacementModel";
import { downloadedBooks } from "../../Observables/booksObservable";

/**
 * Builds a render of a BookModel[] the way it should be represented in the table.
 * @export
 * @param {EntitiesPlacementModel} entitiesPlacement
 * @returns {BookModel[]}
 */
export function buildRender(entitiesPlacement: EntitiesPlacementModel): BookModel[] {
  const buildedRender: BookModel[] = [];
  entitiesPlacement.beforeAll.forEach(entity => {
    const book = downloadedBooks.find(b => b.Id === entity.Id);
    if (!book) {
      throw new Error(`We should have downloaded book with id "${entity.Id}" but its not present in our downloaded book collection`);
    }
    buildedRender.push(book);
  });

  entitiesPlacement.inBetween.forEach(entityPlacement => {
    buildedRender.push(entityPlacement.book);
    entityPlacement.entities.forEach(entity => {
      const book = downloadedBooks.find(book => book.Id === entity.Id);
      if (!book) {
        throw new Error(`We should have downloaded book with id "${entity.Id}" but its not present in our downloaded book collection`);
      }
      buildedRender.push(book);
    });
  });
  return buildedRender;
}
