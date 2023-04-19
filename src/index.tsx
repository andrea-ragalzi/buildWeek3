import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement);
root.render(<Provider store={store}> <App /> </Provider>);
