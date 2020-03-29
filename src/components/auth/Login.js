import React, { useState } from "react";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";
import useAuth from "../../hooks/useAuth";
import ReactAxiosRequest from "../common/ReactAxiosRequest";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const cleanUp = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <ReactAxiosRequest
      method="post"
      route="auth/login"
      body={{ username, password }}
    >
      {({ error, requestCallback }) => {
        return (
          <>
            <h1>Login</h1>
            <Form
              onSubmit={e => {
                e.preventDefault();
                login(requestCallback, cleanUp);
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
                <Label
                  htmlFor="password"
                  className="d-flex justify-content-between"
                >
                  Password
                  <Link to="/auth/password-forgot">Forgot Password?</Link>
                </Label>
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
        );
      }}
    </ReactAxiosRequest>
  );
};

export default Login;
