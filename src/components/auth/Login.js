import React, { useState, useContext } from "react";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";
import { AppContext } from "../../context/Context";

const Login = () => {
  const {
    auth: { login, logout, isLoggedIn, error }
  } = useContext(AppContext);

  const [username, setUsername] = useState("humayunkabir");
  const [password, setPassword] = useState("pass");

  const cleanUp = () => {
    setUsername("");
    setPassword("");
  };

  return isLoggedIn ? (
    <>
      <h1>You are logged in</h1>
      <Button color="primary" onClick={logout}>
        Logout
      </Button>
    </>
  ) : (
    <>
      <h1>Login</h1>
      <Form onSubmit={e => login(e, { username, password }, cleanUp)}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Passowrd</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormGroup>
        <Button color="primary" block disabled={!username || !password}>
          Login
        </Button>

        {error && (
          <p className="text-danger mt-2">
            Username and/or Passowrd do(es)n't match. Please try again.
          </p>
        )}
      </Form>
    </>
  );
};

export default Login;
