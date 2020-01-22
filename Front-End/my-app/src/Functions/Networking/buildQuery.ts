import generateGuid from "../generateGuid";
import BookQueryModel from "../../Models/Networking/BookQueryModel";

// generating queryId, so the server can keep track of which entities we already have.
const queryId = generateGuid();

function trueOrFalse(bool: boolean): string {
  return bool ? "1" : "0";
}

/**
 * Building an url query.
 * @export
 * @param {BookQueryModel} query th book query that will be passed to the server.
 * @param {number} limit count of the books to be downloaded
 * @returns {string} the book query in url variant.
 */
export default function buildQuery(query: BookQueryModel, limit: number): string {
  let parameters: string[] = ["?queryId:" + encodeURIComponent(queryId)];

  parameters.push("limit=" + limit);
  // couldnt make for key in interface work in typescript like for key in object :(
  if (query.Authors && query.Authors.length > 0) {
    parameters.push(encodeURIComponent("authors") + "=" + encodeURIComponent(query.Authors.join(",")));
  }

  if (query.FromDate) {
    const { Year, Month, Date } = query.FromDate;
    parameters = [...parameters, `fromYear=${encodeURIComponent(Year)}`, `fromMonth=${encodeURIComponent(Month)}`, `fromDate=${encodeURIComponent(Date)}`];
  }

  if (query.ToDate) {
    const { Year, Month, Date } = query.ToDate;
    parameters = [...parameters, `toYear=${encodeURIComponent(Year)}`, `toMonth=${encodeURIComponent(Month)}`, `toDate=${encodeURIComponent(Date)}`];
  }

  if (query.Genres && query.Genres.length > 0) {
    parameters.push("genresIds=" + encodeURIComponent(query.Genres.join(",")));
  }

  if (query.ProfitOrderByAscending !== undefined) {
    parameters.push("profitOrderByAscending=" + trueOrFalse(query.ProfitOrderByAscending));
  }

  if (query.RetailPriceOrderByAscending !== undefined) {
    parameters.push("retailPriceOrderByAscending=" + trueOrFalse(query.RetailPriceOrderByAscending));
  }

  if (query.SupplyPriceOrderByAscending !== undefined) {
    parameters.push("supplyPriceOrderByAscending=" + trueOrFalse(query.SupplyPriceOrderByAscending));
  }

  if (query.SalesOrderByAscending !== undefined) {
    parameters.push("salesOrderByAscending=" + trueOrFalse(query.SalesOrderByAscending));
  }

  if (query.TotalProfitOrderByAscending !== undefined) {
    parameters.push("totalProfitOrderByAscending=" + trueOrFalse(query.TotalProfitOrderByAscending));
  }

  return parameters.join("&");
}
