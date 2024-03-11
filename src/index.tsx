import React from "react";
import ReactDOM from "react-dom/client";
import AlgoProvider from "./providers/AlgoProvider";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AlgoProvider>
      <App />
    </AlgoProvider>
  </React.StrictMode>
);
