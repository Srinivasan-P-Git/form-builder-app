import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ModalContextProvider } from "./context/modal/modal.context";
import { ConfigureJsonContextProvider } from "./context/configure-json/configure-json.context";

const appRoot = document.getElementById("app-root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
        <ConfigureJsonContextProvider>
          <App />
        </ConfigureJsonContextProvider>
      </ModalContextProvider>
    </BrowserRouter>
  </StrictMode>,
  appRoot
);
