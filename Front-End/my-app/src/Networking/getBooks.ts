import currentBookQuery from "../Observables/currentBookQueryObservable";
import Axios from "axios";
import buildQuery from "../Functions/Networking/buildQuery";
import { renderOrAppend, downloadedBooks } from "../Observables/booksObservable";
import StartingNumberOfEntitiesInTableConstant from "../Constants/StartingNumberOfEntitiesInTableConstant";
import EntitiesAfterBottomScrollConstant from "../Constants/EntitiesAfterBottomScrollConstant";
import PendingRequest from "./PendingRequest";
import BookModel from "../Models/Book/BookModel";
import { skip, take } from "rxjs/operators";

/**
 * Subscribing to the book query, so it will send a new request on a new query.
 * @export
 */
export function subscribeToBookQuery(): void {
  currentBookQuery.pipe().subscribe({
    next: query => {
      Axios.get<BookModel[]>("https://localhost:5001/api/getbooks/" + buildQuery(query, StartingNumberOfEntitiesInTableConstant, true))
        .then(r => {
          const books = r.data;
          //downloadedBooks.push(...r.data.inBetween.map(e => e.book));
          //const books = buildRender(r.data);

          downloadedBooks.push(...books);
          renderOrAppend.next({
            value: true,
            Books: books
          });
        })
        .finally(() => (PendingRequest.isPending = false));
    }
  });
}
/**
 * Getting more books by the current book query.
 * Usually this is called from the infinite scroll function.
 * @export
 */
export function getMoreBooks(): void {
  PendingRequest.isPending = true;
  Axios.get<BookModel[]>("https://localhost:5001/api/getbooks/" + buildQuery(currentBookQuery.getValue(), EntitiesAfterBottomScrollConstant, false))
    .then(r => {
      //downloadedBooks.push(...r.data.inBetween.map(e => e.book));
      // const books = buildRender(r.data);

      const books = r.data;
      downloadedBooks.push(...books);
      renderOrAppend.next({
        value: false,
        Books: [...books]
      });
    })
    .finally(() => (PendingRequest.isPending = false));
}
