import currentBookQuery from "../Observables/currentBookQueryObservable";
import axios from "axios";
import buildQuery from "../Functions/Networking/buildQuery";
import BookModel from "../Models/Book/BookModel";
import { shouldRenderOrAppend } from "../Observables/booksObservable";
currentBookQuery.subscribe({
  next: query => {
    axios.get<BookModel[]>("/" + buildQuery(query)).then(r => {
      const books = r.data;
      shouldRenderOrAppend.next({
        value: true,
        Books: books
      });
    });
  }
});
