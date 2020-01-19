import React from "react";
import { Table } from "react-bootstrap";

type State = {
  rows: JSX.Element[];
};

export default class BooksTable extends React.Component {
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
