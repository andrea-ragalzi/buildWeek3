import React from "react";
import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter } from "react-router-dom";

import { MyFooter, MiniFooter } from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyFooter />
        <MiniFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
