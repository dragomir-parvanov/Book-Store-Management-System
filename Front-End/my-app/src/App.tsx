import React from "react";
import "./App.css";
import AppNavbar from "./Components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render(): JSX.Element {
    return <AppNavbar></AppNavbar>;
  }
}

export default App;
