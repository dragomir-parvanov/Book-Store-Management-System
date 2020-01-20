import currentBookQuery from "../Observables/currentBookQueryObservable";

import clearSortingsThatCannotExistsTogether from "./clearSortingsThatCannotExistsTogether";

// Sortings the entities

export function retailPriceOnClick(): void {
  const currentBookQueryCached = currentBookQuery.getValue();
  const ordering = currentBookQueryCached.RetailPriceOrderByAscending ?? false;
  const query = clearSortingsThatCannotExistsTogether(currentBookQueryCached);
  query.RetailPriceOrderByAscending = !ordering;
  currentBookQuery.next(query);
}
export function supplyPriceOnClick(): void {
  const currentBookQueryCached = currentBookQuery.getValue();
  const ordering = currentBookQueryCached.SupplyPriceOrderByAscending ?? false;
  const query = clearSortingsThatCannotExistsTogether(currentBookQueryCached);
  query.SupplyPriceOrderByAscending = !ordering;
  currentBookQuery.next(query);
}
export function profitOnClick(): void {
  const currentBookQueryCached = currentBookQuery.getValue();
  const ordering = currentBookQueryCached.ProfitOrderByAscending ?? false;
  const query = clearSortingsThatCannotExistsTogether(currentBookQueryCached);
  query.ProfitOrderByAscending = !ordering;
  currentBookQuery.next(query);
}
export function salesOnClick(): void {
  const currentBookQueryCached = currentBookQuery.getValue();
  const ordering = currentBookQueryCached.SalesOrderByAscending ?? false;
  const query = clearSortingsThatCannotExistsTogether(currentBookQueryCached);
  query.SalesOrderByAscending = !ordering;
  currentBookQuery.next(query);
}
export function totalProfitOnClick(): void {
  const currentBookQueryCached = currentBookQuery.getValue();
  const ordering = currentBookQueryCached.TotalProfitOrderByAscending ?? false;
  const query = clearSortingsThatCannotExistsTogether(currentBookQueryCached);
  query.TotalProfitOrderByAscending = !ordering;
  currentBookQuery.next(query);
}
