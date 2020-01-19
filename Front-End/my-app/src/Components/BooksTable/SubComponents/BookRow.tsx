import React from "react";
import BookRowModel from "../../../Models/BookRowModel";

type Props = {
  book: BookRowModel;
};

export default class BookRow extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <tr>
        <td>{this.props.book.Name}</td>
        <td>{this.props.book.Author}</td>
        <td>{this.props.book.DateReleased}</td>
        <td>{this.props.book.Genre}</td>
        <td>{this.props.book.RetailPrice}</td>
        <td>{this.props.book.SupplyPrice}</td>
        <td>{this.props.book.Profit}</td>
        <td>{this.props.book.Sales}</td>
        <td>{this.props.book.TotalProfit}</td>
      </tr>
    );
  }
}
