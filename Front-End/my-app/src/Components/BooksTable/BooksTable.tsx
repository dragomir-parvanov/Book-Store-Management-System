import React from "react";
import { Table } from "react-bootstrap";
import { renderOrAppend } from "../../Observables/booksObservable";
import BookRow from "./SubComponents/BookRow";
import { generateBooks } from "../../Testing/generateBooks";
import { retailPriceOnClick, supplyPriceOnClick, totalProfitOnClick, salesOnClick, profitOnClick } from "../../Functions/sortings";
import { getMoreBooks } from "../../Networking/getBooks";

type Props = {};

type State = {
  rows: JSX.Element[];
};

export default class BooksTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // if should renderOrAppend value is true, re-render everything, if its false, just append
    renderOrAppend.subscribe({
      next: s => {
        if (s.value) {
          this.setState({ rows: s.Books.map(b => <BookRow key={b.Id} book={b}></BookRow>) });
        } else {
          this.setState({ rows: [...this.state.rows, ...s.Books.map(b => <BookRow key={b.Id} book={b}></BookRow>)] });
        }
      }
    });
  }

  componentDidMount(): void {
    renderOrAppend.next({
      value: true,
      Books: generateBooks(50)
    });
  }
  state: State = {
    rows: []
  };

  render(): JSX.Element {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Date released</th>
            <th>Genre</th>
            <th onClick={retailPriceOnClick}>Retail price</th>
            <th onClick={supplyPriceOnClick}>Supply price</th>
            <th onClick={profitOnClick}>Profit</th>
            <th onClick={salesOnClick}>Sales</th>
            <th onClick={totalProfitOnClick}>Total profit</th>
          </tr>
        </thead>
        <tbody>{this.state.rows}</tbody>
      </Table>
    );
  }
}
