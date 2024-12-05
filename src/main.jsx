import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './components/store/store'
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
