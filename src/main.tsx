import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    <App />
  </ConfigProvider>,
);
