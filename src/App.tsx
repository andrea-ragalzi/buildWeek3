import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style/App.scss';
import CustomNavbar from './components/CustomNavbar';


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <h1>APP OK</h1>
    </div>
  );
}

export default App;
