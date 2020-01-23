import React from "react";
import BookModel from "../../../Models/Book/BookModel";

type Props = {
  book: BookModel;
};

export default class BookRow extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <tr>
        <td style={{ minWidth: "20%", maxWidth: "20%", width: "20%" }}>{this.props.book.Name}</td>
        <td style={{ minWidth: "20%", maxWidth: "20%", width: "20%" }}>{this.props.book.Author.Name}</td>
        <td style={{ minWidth: "10%", maxWidth: "10%", width: "10%" }}>{this.props.book.DateReleased.toLocaleDateString()}</td>
        <td style={{ minWidth: "10%", maxWidth: "10%", width: "10%" }}>{this.props.book.Genre.Name}</td>
        <td style={{ minWidth: "10%", maxWidth: "10%", width: "10%" }}>{this.props.book.RetailPrice}</td>
        <td style={{ minWidth: "10%", maxWidth: "10%", width: "10%" }}>{this.props.book.SupplyPrice}</td>
        <td style={{ minWidth: "5%", maxWidth: "5%", width: "5%" }}>{this.props.book.Profit}</td>
        <td style={{ minWidth: "5%", maxWidth: "5%", width: "5%" }}>{this.props.book.Sales}</td>
        <td style={{ minWidth: "20%", maxWidth: "20%", width: "20%" }}>{this.props.book.TotalProfit}</td>
      </tr>
    );
  }
}
