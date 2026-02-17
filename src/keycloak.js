import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Adarsh-realms",
  clientId: "myApp",
});

export default keycloak;
