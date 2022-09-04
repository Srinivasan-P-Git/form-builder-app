import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AlertContextProvider } from "./context/alert/alert.context";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </BrowserRouter>
  </StrictMode>,
  root
);
