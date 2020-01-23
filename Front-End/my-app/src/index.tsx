import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { getMoreBooks } from "./Networking/getBooks";
import PendingRequest from "./Networking/PendingRequest";

ReactDOM.render(<App />, document.getElementById("root"));

// infitie scroll
document.onscroll = function(): void {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    if (!PendingRequest.isPending) {
      console.log("infinite scroll");
      getMoreBooks();
    }
  }
};
