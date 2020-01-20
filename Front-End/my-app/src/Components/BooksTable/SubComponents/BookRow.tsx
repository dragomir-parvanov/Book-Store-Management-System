import React from "react";
import BookModel from "../../../Models/Book/BookModel";

type Props = {
  book: BookModel;
};

export default class BookRow extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <tr>
        <td>{this.props.book.Name}</td>
        <td>{this.props.book.Authors.join()}</td>
        <td>{this.props.book.DateReleased.toLocaleTimeString()}</td>
        <td>{this.props.book.Genres.join()}</td>
        <td>{this.props.book.RetailPrice}</td>
        <td>{this.props.book.SupplyPrice}</td>
        <td>{this.props.book.Profit}</td>
        <td>{this.props.book.Sales}</td>
        <td>{this.props.book.TotalProfit}</td>
      </tr>
    );
  }
}
