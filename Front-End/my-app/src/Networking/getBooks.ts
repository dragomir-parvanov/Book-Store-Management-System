import currentBookQuery from "../Observables/currentBookQueryObservable";
import axios from "axios";
import buildQuery from "../Functions/Networking/buildQuery";
import BookModel from "../Models/Book/BookModel";
import { renderOrAppend, downloadedBooks } from "../Observables/booksObservable";
import { skip } from "rxjs/operators";

/**
 * Subscribing to the book query, so it will send a new request on new query.
 * @export
 */
export function subscribeToBookQuery(): void {
  currentBookQuery.pipe(skip(1)).subscribe({
    next: query => {
      axios.get<BookModel[]>("/" + buildQuery(query)).then(r => {
        console.log("sending request to the server with query:\n" + JSON.stringify(query));
        // eslint-disable-next-line no-constant-condition
        if (true) {
          return;
        }
        const books = r.data;
        downloadedBooks.push(...books);
        renderOrAppend.next({
          value: true,
          Books: [...books]
        });
      });
    }
  });
}
/**
 * Getting more books on the current book query.
 * Usually this is called from the infinite scroll function.
 * @export
 */
export function getMoreBooks(): void {
  axios.get<BookModel[]>("/" + buildQuery(currentBookQuery.getValue())).then(r => {
    const books = r.data;
    downloadedBooks.push(...books);
    renderOrAppend.next({
      value: false,
      Books: [...books]
    });
  });
}
