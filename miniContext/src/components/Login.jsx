import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, passowrd });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      {"  "}
      <input
        type="text"
        value={passowrd}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="text-white" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
