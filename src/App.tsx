import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { CustomNavbar } from "./components/CustomNavbar";
import { Messages } from "./components/Messages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
        <Messages />
      </div>
    </BrowserRouter>
  );
}

export default App;
