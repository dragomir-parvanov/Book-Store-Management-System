import React from "react";
import BookModel from "../../../Models/BookModel";

type Props = {
  book: BookModel;
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
        <td>{this.props.book.SupplyPrice}</td>
        <td>{this.props.book.SupplyPrice}</td>
        <td>{this.props.book.SupplyPrice}</td>
      </tr>
    );
  }
}
