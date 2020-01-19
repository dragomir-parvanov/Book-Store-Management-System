import generateGuid from "../generateGuid";
import BookQueryModel from "../../Models/Networking/BookQueryModel";

// generating queryId, so the server can keep track of which entities we already have.
const queryId = generateGuid();

function trueOrFalse(bool: boolean): string {
  return bool ? "1" : "0";
}

export default function buildQuery(bookQuery: BookQueryModel): string {
  let parameters: string[] = ["queryId:" + encodeURIComponent(queryId)];

  // for key in interface doesnt work on typescript sadly :(.
  if (bookQuery.Authors && bookQuery.Authors.length > 0) {
    parameters.push(encodeURIComponent("authors") + "=" + encodeURIComponent(bookQuery.Authors.join(",")));
  }

  if (bookQuery.FromDate) {
    const { Year, Month, Date } = bookQuery.FromDate;
    parameters = [...parameters, `fromYear=${encodeURIComponent(Year)}`, `fromMonth=${encodeURIComponent(Month)}`, `fromDate=${encodeURIComponent(Date)}`];
  }

  if (bookQuery.ToDate) {
    const { Year, Month, Date } = bookQuery.ToDate;
    parameters = [...parameters, `toYear=${encodeURIComponent(Year)}`, `toMonth=${encodeURIComponent(Month)}`, `toDate=${encodeURIComponent(Date)}`];
  }

  if (bookQuery.Genres && bookQuery.Genres.length > 0) {
    parameters.push("genres=" + encodeURIComponent(bookQuery.Genres.join(",")));
  }

  if (bookQuery.ProfitOrderByAscending !== undefined) {
    parameters.push("profitOrderByAscending=" + trueOrFalse(bookQuery.ProfitOrderByAscending));
  }

  if (bookQuery.RetailPriceOrderByAscending !== undefined) {
    parameters.push("retailPriceOrderByAscending=" + trueOrFalse(bookQuery.RetailPriceOrderByAscending));
  }

  if (bookQuery.SupplyPriceOrderByAscending !== undefined) {
    parameters.push("supplyPriceOrderByAscending=" + trueOrFalse(bookQuery.SupplyPriceOrderByAscending));
  }

  if (bookQuery.SalesOrderByAscending !== undefined) {
    parameters.push("salesOrderByAscending=" + trueOrFalse(bookQuery.SalesOrderByAscending));
  }

  if (bookQuery.TotalProfitOrderByAscending !== undefined) {
    parameters.push("totalProfitOrderByAscending=" + trueOrFalse(bookQuery.TotalProfitOrderByAscending));
  }

  return parameters.join("&");
}
