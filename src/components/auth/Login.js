import React, { useState, useContext } from "react";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";
import { AppContext } from "../../context/Context";
import useAuth from "../../hook/useAuth";
import Request from "react-axios-request/Request";
import { apiBaseUrl } from "../../config";

const Login = () => {
  const { user } = useContext(AppContext);

  const { login, logout } = useAuth();

  const [username, setUsername] = useState("humayunkabir");
  const [password, setPassword] = useState("pass");

  const cleanUp = () => {
    setUsername("");
    setPassword("");
  };

  return !user ? (
    <Request
      type="POST"
      base={apiBaseUrl}
      route="auth/login"
      body={{ username, password }}
    >
      {({ error, rcb }) => (
        <>
          <h1>Login</h1>
          <Form
            onSubmit={e => {
              e.preventDefault();
              login(rcb, cleanUp);
            }}
          >
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
                <br />
                <small className="text-italic">{error.message}</small>
              </p>
            )}
          </Form>
        </>
      )}
    </Request>
  ) : (
    <>
      <h1>You are logged in</h1>
      <Button color="primary" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default Login;
