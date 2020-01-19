import DateQuery from "./DateQuery";

export default interface BookQueryModel {
  Author?: string;
  DateQuery?: DateQuery;
  Genre?: string;
  RetailPriceOrderByAscending?: boolean;
  SupplyPriceOrderByAscending?: boolean;
  ProfitOrderByAscending?: boolean;
  SalesOrderByAscending?: boolean;
  TotalProfitOrderByAscending?: boolean;
}
