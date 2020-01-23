import BookQueryModel from "../Models/Networking/BookQueryModel";

/**
 * Clears the sortings that cannot exist together,
 * @example profit order by ascending and sales order by ascending cannot exist together
 * @export
 * @param {BookQueryModel} query
 * @returns {BookQueryModel}
 */
export default function clearSortingsThatCannotExistsTogether(query: BookQueryModel): BookQueryModel {
  query.ProfitOrderByAscending = undefined;
  query.SalesOrderByAscending = undefined;
  query.SupplyPriceOrderByAscending = undefined;
  query.RetailPriceOrderByAscending = undefined;
  query.TotalProfitOrderByAscending = undefined;
  return query;
}
