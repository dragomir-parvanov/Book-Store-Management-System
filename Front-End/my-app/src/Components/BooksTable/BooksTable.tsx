import React from "react";
import { Table, OverlayTrigger } from "react-bootstrap";
import { renderOrAppend } from "../../Observables/booksObservable";
import BookRow from "./SubComponents/BookRow";
import { retailPriceOnClick, supplyPriceOnClick, totalProfitOnClick, salesOnClick, profitOnClick } from "../../Functions/sortings";
import { subscribeToBookQuery } from "../../Networking/getBooks";
import DatePopOver from "./SubComponents/PopOvers/DatePopOver";
import "react-datepicker/dist/react-datepicker.css";
import AuthorsPopOver from "./SubComponents/PopOvers/AuthorsPopOver";
import { skip } from "rxjs/operators";

type Props = {};

type State = {
  rows: JSX.Element[];
};

export default class BooksTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // if should renderOrAppend value is true, re-render everything, if its false, just append
    renderOrAppend.pipe(skip(1)).subscribe({
      next: s => {
        const rows = s.Books.map(b => <BookRow key={b.Id} book={b}></BookRow>);
        if (s.value) {
          this.setState({ rows: rows });
        } else {
          this.setState({
            rows: [...this.state.rows, ...s.Books.map(b => <BookRow key={b.Id} book={b}></BookRow>)]
          });
        }
      }
    });
  }

  /**
   * Starting to download the books.
   * @memberof BooksTable
   */
  componentDidMount(): void {
    subscribeToBookQuery();
  }

  state: State = {
    rows: []
  };

  render(): JSX.Element {
    return (
      <Table striped bordered hover>
        <thead style={{ position: "-webkit-sticky" }}>
          <tr>
            <th>Book name</th>
            <OverlayTrigger trigger="click" placement="bottom" key="authors-overlay-trigger" overlay={<AuthorsPopOver></AuthorsPopOver>}>
              <th>Author name</th>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" key="date-overlay-trigger" overlay={<DatePopOver></DatePopOver>}>
              <th>Date released</th>
            </OverlayTrigger>
            <th>Genre</th>
            <th style={{ width: "10%" }} onClick={retailPriceOnClick}>
              Retail price
            </th>
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
