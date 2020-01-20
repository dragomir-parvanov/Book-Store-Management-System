import React from "react";
import "./App.css";
import AppNavbar from "./Components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BooksTable from "./Components/BooksTable/BooksTable";
import { subscribeToBookQuery } from "./Networking/getBooks";

subscribeToBookQuery();

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <AppNavbar></AppNavbar>
        <BooksTable></BooksTable>
      </div>
    );
  }
}

export default App;
