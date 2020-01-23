import React from "react";
import { Popover, Form, FormControl, Col, OverlayTrigger } from "react-bootstrap";
type State = {
  currentAuthors: JSX.Element[];
  authorsSearchResult: JSX.Element[];
};

export default class AuthorsPopOver extends React.Component {
  state: State = {
    currentAuthors: [],
    authorsSearchResult: []
  };

  /**
   * NOT FINISHED
   *
   * @returns {JSX.Element}
   * @memberof AuthorsPopOver
   */
  render(): JSX.Element {
    const searchAuthorsPopover = (
      <Popover {...this.props} id="authors-popover-implementation">
        <Popover.Title as="h3">
          <Col>Search for authors</Col>
        </Popover.Title>
        <Popover.Content>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Popover.Content>
      </Popover>
    );
    return (
      <Popover {...this.props} id="authors-popover-implementation">
        <OverlayTrigger trigger="click" placement="right" key="authors-overlay-trigger" overlay={searchAuthorsPopover}>
          <Popover.Title as="h3">
            <Col>Current authors</Col>
          </Popover.Title>
        </OverlayTrigger>
        <Popover.Content>{this.state.currentAuthors}</Popover.Content>
      </Popover>
    );
  }
}
