import currentBookQuery from "../Observables/currentBookQueryObservable";
import axios from "axios";
import buildQuery from "../Functions/Networking/buildQuery";
import BookModel from "../Models/Book/BookModel";
import { shouldRenderOrAppend, downloadedBooks } from "../Observables/booksObservable";

// On every book query change, download the new books
currentBookQuery.subscribe({
  next: query => {
    axios.get<BookModel[]>("/" + buildQuery(query)).then(r => {
      const books = r.data;
      downloadedBooks.push(...books);
      shouldRenderOrAppend.next({
        value: true,
        Books: [...books]
      });
    });
  }
});

export /**
 * Getting more books that should be appended to the existing collection.
 *
 */
const getMoreBooks = (): void => {
  axios.get<BookModel[]>("/" + buildQuery(currentBookQuery.getValue())).then(r => {
    const books = r.data;
    downloadedBooks.push(...books);
    shouldRenderOrAppend.next({
      value: false,
      Books: [...books]
    });
  });
};
