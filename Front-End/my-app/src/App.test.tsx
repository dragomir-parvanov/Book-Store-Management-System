import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { truncateToDecimalPlaces } from "./Functions/calculateProfit";
import BookQueryModel from "./Models/Networking/BookQueryModel";
import buildQuery from "./Functions/Networking/buildQuery";

test("Cutting decimal places", () => {
  const number = 1.35657;
  expect(truncateToDecimalPlaces(number, 2)).toBe(1.35);
});

test("Building queries", () => {
  const testBookQuery: BookQueryModel = {
    Authors: ["Petar", "Ivan"],
    ProfitOrderByAscending: true,
    SalesOrderByAscending: false
  };

  console.log(buildQuery(testBookQuery, 5));
});
