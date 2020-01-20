import Identifiable from "../Identifiable";
import InBetweenModel from "./InBetweenModel";

/**
 * Used for identification which entities should be rendered after some entity that we downloaded.
 * @export
 * @interface EntitiesLocation
 */
export interface EntitiesPlacementModel {
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
