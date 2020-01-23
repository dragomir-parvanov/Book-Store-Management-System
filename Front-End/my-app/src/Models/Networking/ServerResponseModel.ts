import Identifiable from "../Identifiable";
import InBetweenModel from "./InBetweenModel";

/**
 * The response that we are getting from the server.
 * @export
 * @interface ServerResponseModel
 */
export interface ServerResponseModel {
  /**
   * Entities that we have downloaded before and they should be present before any entity from inBetween.
   * @type {Identifiable[]}
   * @memberof EntitiesLocationModel
   */
  beforeAll: Identifiable[];
  /**
   * Representing the already downloaded entities,
   * which needs to be placed after the just downloaded entities.
   * @type {Identifiable[]}
   * @memberof EntitiesLocation
   */
  inBetween: InBetweenModel[];
}
