import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import keycloak from "./keycloak";

const root = ReactDOM.createRoot(document.getElementById("root"));

keycloak
  .init({
    onLoad: "login-required",
    checkLoginIframe: false,
  })
  .then((authenticated) => {
    if (!authenticated) {
      window.location.reload();
    }

    root.render(
      <React.StrictMode>
        <App keycloak={keycloak} />
      </React.StrictMode>,
    );
  })
  .catch((err) => {
    console.error("Keycloak init error", err);
  });
