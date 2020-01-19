import BookModel from "../Models/BookModel";
import TaxMultiplier from "../Constants/TaxMultiplierConstant";

/**
 * Round
 *
 * @export
 * @param {number} number
 * @param {number} toDecimalPlaces
 * @returns
 */
export function cutToDecimalPlaces(
  number: number,
  toDecimalPlaces: number
): number {
  return (number = +number.toFixed(toDecimalPlaces));
}

/**
 * A tax is also applied when calculating profit.
 * The number is also rounded to 2 decimal places
 * @param {BookModel} book
 */
export function calculateProfit(book: BookModel): number {
  const profit: number = book.RetailPrice * TaxMultiplier - book.SupplyPrice;

  // Better than Math.Round
  return cutToDecimalPlaces(profit, 2);
}
