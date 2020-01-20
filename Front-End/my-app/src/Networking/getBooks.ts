import currentBookQuery from "../Observables/currentBookQueryObservable";
import Axios from "axios";
import buildQuery from "../Functions/Networking/buildQuery";
import { renderOrAppend, downloadedBooks } from "../Observables/booksObservable";
import { skip } from "rxjs/operators";
import { ServerResponseModel } from "../Models/Networking/ServerResponseModel";
import { buildRender } from "../Functions/Networking/buildRender";
import StartingNumberOfEntitiesInTableConstant from "../Constants/StartingNumberOfEntitiesInTableConstant";
import EntitiesAfterBottomScrollConstant from "../Constants/EntitiesAfterBottomScrollConstant";
import PendingRequest from "./pendingRequest";

/**
 * Subscribing to the book query, so it will send a new request on a new query.
 * @export
 */
export function subscribeToBookQuery(): void {
  currentBookQuery.pipe(skip(1)).subscribe({
    next: query => {
      Axios.get<ServerResponseModel>("/" + buildQuery(query, StartingNumberOfEntitiesInTableConstant))
        .then(r => {
          console.log("sending request to the server with query:\n" + JSON.stringify(query));
          // eslint-disable-next-line no-constant-condition
          if (true) {
            return;
          }
          downloadedBooks.push(...r.data.inBetween.map(e => e.book));
          const books = buildRender(r.data);
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
  Axios.get<ServerResponseModel>("/" + buildQuery(currentBookQuery.getValue(), EntitiesAfterBottomScrollConstant))
    .then(r => {
      // eslint-disable-next-line no-constant-condition
      if (true) {
        return;
      }
      downloadedBooks.push(...r.data.inBetween.map(e => e.book));
      const books = buildRender(r.data);
      renderOrAppend.next({
        value: false,
        Books: [...books]
      });
    })
    .finally(() => (PendingRequest.isPending = false));
}
