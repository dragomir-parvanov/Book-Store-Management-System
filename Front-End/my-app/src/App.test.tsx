import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { truncateToDecimalPlaces } from "./Functions/CalculateProfit";

test("Cutting decimal places", () => {
  const number = 1.35657;
  expect(truncateToDecimalPlaces(number, 2)).toBe(1.35);
});
