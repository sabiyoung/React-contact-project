import React, { useState } from "react";
import styled from "styled-components";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
    console.log("Submitted:", e);
  }

  return (
    <Form>
      <form onSubmit={handleSubmission}>
        <div className="placeHolder">
          <label htmlFor="username"></label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="placeHolder">
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </Form>
  );
};

const Form = styled.div`
  .placeHolder {
    padding: 5px;
  }
  input {
    padding-top: 10px;
    border: none;
    border-bottom: 1px solid #333;
    font-size: 25px;
    background-color: #f5f5f5;
  }

  button {
    text-transform: uppercase;
    background-color: #bbb;
    padding: 15px;
    margin: 10px;
    margin-left: 80px;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
`;
export default LoginForm;
