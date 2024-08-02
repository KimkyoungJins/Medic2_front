import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Div>
      <App />
    </Div>
  </React.StrictMode>
);
