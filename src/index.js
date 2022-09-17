import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ModalContextProvider } from "./context/modal/modal.context";

const appRoot = document.getElementById("app-root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </BrowserRouter>
  </StrictMode>,
  appRoot
);
