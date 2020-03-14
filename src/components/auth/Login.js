import React, { useState, useContext } from "react";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";
import { AppContext } from "../../context/Context";
import Request from "../../rpc/Request";

const LoginContext = () => {
  const { auth } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await auth.login(username, password);
    setUsername("");
    setPassword("");
    setResult(result);
  };

  return auth.isLoggedIn ? (
    <>
      <h1>You are logged in</h1>
      <Button color="primary" onClick={auth.logout}>
        Logout
      </Button>
    </>
  ) : (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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

        {result?.name === "Error" && (
          <p className="text-danger mt-2">
            Username and/or Passowrd do(es)n't match. Please try again.
          </p>
        )}
      </Form>
    </>
  );
};

const Login = () => {
  const [username, setUsername] = useState("humayunkabir");
  const [password, setPassword] = useState("pass");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    const logout = () => {
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
    };

    return (
      <>
        <h1>You are logged in</h1>
        <Button color="primary" onClick={logout}>
          Logout
        </Button>
      </>
    );
  }

  const handleSubmit = async (e, cb) => {
    e.preventDefault();
    const { accessToken } = await cb({ username, password });

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <Request type="POST" route="auth/login" body={{ username, password }}>
        {({ error, cb }) => (
          <Form onSubmit={e => handleSubmit(e, cb)}>
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
        )}
      </Request>
    </>
  );
};

export default Login;
