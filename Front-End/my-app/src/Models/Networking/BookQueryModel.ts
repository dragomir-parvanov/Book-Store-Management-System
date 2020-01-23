import Author from "../Book/Author";
import Genre from "../Book/Genre";
import DateQueryModel from "../Networking/DateQueryModel";

export default interface BookQueryModel {
  /**
   * We should look for books only from these authors.
   * @type {Author[]}
   * @memberof BookQueryModel
   */
  Authors?: Author[];

  /**
   * We should look for books only from these genres.
   * @type {Genre[]}
   * @memberof BookQueryModel
   */
  Genres?: Genre[];

  /**
   *If we should order the entities by ascending retail price
   * @type {boolean}
   * @memberof BookQueryModel
   */
  RetailPriceOrderByAscending?: boolean;

  /**
   * If we should order the entities by ascending supplier price
   * @type {boolean}
   * @memberof BookQueryModel
   */
  SupplyPriceOrderByAscending?: boolean;

  /**
   *  If we should order the entities by ascending number of profit
   * @type {boolean}
   * @memberof BookQueryModel
   */
  ProfitOrderByAscending?: boolean;
  /**
   *  If we should order the entities by ascending sales count
   * @type {boolean}
   * @memberof BookQueryModel
   */
  SalesOrderByAscending?: boolean;

  /**
   * If we should order the entities by ascending total sum of profits.
   * @type {boolean}
   * @memberof BookQueryModel
   */
  TotalProfitOrderByAscending?: boolean;

  /**
   * We will search for entities after this date.
   * @type {DateQueryModel}
   * @memberof BookQueryModel
   */
  FromDate?: DateQueryModel;

  /**
   * We will search for entities before this date.
   * @type {DateQueryModel}
   * @memberof BookQueryModel
   */
  ToDate?: DateQueryModel;
}
