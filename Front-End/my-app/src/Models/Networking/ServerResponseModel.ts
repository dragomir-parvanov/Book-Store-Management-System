import BookModel from "../Book/BookModel";
import { EntitiesPlacementModel } from "./EntitiesPlacementModel";

/**
 * The response from the server.
 * @export
 * @interface ServerResponseModel
 */
export interface ServerResponseModel {
  Books: BookModel[];
  EntitiesLocation: EntitiesPlacementModel[];
}
