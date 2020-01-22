import { Popover, ListGroup, Row, Col } from "react-bootstrap";
import React from "react";
import DatePicker from "react-datepicker";
import currentBookQuery from "../../../../Observables/currentBookQueryObservable";
import createDateQuery from "../../../../Factories/createDateQuery";

type State = {
  startDate: Date;
  endDate: Date;
};

export default class DatePopOver extends React.Component {
  state: State = {
    startDate: new Date(),
    endDate: new Date()
  };

  handleStartDateChange = (date: Date): void => {
    const query = currentBookQuery.getValue();
    query.FromDate = createDateQuery(date);
    currentBookQuery.next(query);
    this.setState({ startDate: date });
  };

  handleEndDateChange = (date: Date): void => {
    const query = currentBookQuery.getValue();
    query.ToDate = createDateQuery(date);
    currentBookQuery.next(query);
    this.setState({ endDate: date });
  };

  render(): JSX.Element {
    return (
      <Popover {...this.props} id="date-popover-implementation-bottom">
        <Popover.Title as="h3">Filter by release date</Popover.Title>
        <ListGroup>
          <ListGroup.Item>
            <Row>
              From:
              <Col>
                <DatePicker selected={this.state.startDate} dropdownMode="select" showYearDropdown yearDropdownItemNumber={10} onChange={this.handleStartDateChange} />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Col>
                <DatePicker selected={this.state.endDate} dropdownMode="select" showYearDropdown yearDropdownItemNumber={10} onChange={this.handleEndDateChange} />
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Popover>
    );
  }
}
