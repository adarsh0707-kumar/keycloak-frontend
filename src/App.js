import React, { useEffect, useState } from "react";
import axios from "axios";

function App({ keycloak }) {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (keycloak.authenticated) {
      setUsername(keycloak.tokenParsed?.preferred_username);
      setToken(keycloak.token);
    }
  }, [keycloak]);

  const callBackend = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/hello", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      alert(res.data);
    } catch (err) {
      console.error(err);
      alert("API Error (Check backend)");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome {username}</h1>

      <button onClick={callBackend}>Call Backend</button>

      <br />
      <br />

      <button onClick={() => keycloak.logout()}>Logout</button>
    </div>
  );
}

export default App;
