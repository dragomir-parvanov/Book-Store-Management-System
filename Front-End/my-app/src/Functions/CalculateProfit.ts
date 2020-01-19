import TaxMultiplier from "../Constants/TaxMultiplierConstant";
import BookModel from "../Models/BookModel";
/**
 * Truncates the number to a desired amount of decimal places.
 *
 * @export
 * @param {number} number
 * @param {number} toDecimalPlaces
 * @returns
 */
export function truncateToDecimalPlaces(number: number, toDecimalPlaces: number): number {
  if (!number) {
    throw new Error("number is null");
  }

  if (!toDecimalPlaces) {
    throw new Error("toDecimalPlaces is null");
  }

  const regex = new RegExp("^-?\\d+(?:.\\d{0," + (toDecimalPlaces || -1) + "})?");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const truncatedNumber = number.toString().match(regex)![0];

  if (!truncatedNumber) {
    throw new Error("regex didn't match anything");
  }

  return parseFloat(truncatedNumber);
}

/**
 * A tax is also applied when calculating profit.
 * The number is also rounded to 2 decimal places
 * @param {BookModel} book
 */
export function calculateProfit(book: BookModel): number {
  const profit: number = book.RetailPrice * TaxMultiplier - book.SupplyPrice;

  return truncateToDecimalPlaces(profit, 2);
}
