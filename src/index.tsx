import React from "react";
import ReactDOM from "react-dom/client";
import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";
import { Root } from "./Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
