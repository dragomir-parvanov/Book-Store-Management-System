import React from "react";
import { Table } from "react-bootstrap";
import { shouldRenderOrAppend } from "../../Observables/booksObservable";
import BookRow from "./SubComponents/BookRow";

type Props = {};

type State = {
  rows: JSX.Element[];
};

export default class BooksTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    shouldRenderOrAppend.subscribe({
      next: s => {
        if (s.value) {
          this.setState({ rows: s.Books.map(b => <BookRow key={b.Id} book={b}></BookRow>) });
        } else {
          this.setState({ rows: [...this.state.rows, ...s.Books.map(b => <BookRow key={b.Id} book={b}></BookRow>)] });
        }
      }
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
            <th>Author</th>
            <th>Date released</th>
            <th>Genre</th>
            <th>Retail price</th>
            <th>Supply price</th>
            <th>Profit</th>
            <th>Sales</th>
            <th>Total profit</th>
          </tr>
        </thead>
        <tbody>{this.state.rows}</tbody>
      </Table>
    );
  }
}
