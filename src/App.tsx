import React from "react";
import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <button className="btnWhite">Ciao</button>
      <button className="btnBlue">Ciao</button>
      <button className="btnGrey">Ciao</button>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
