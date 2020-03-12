import React, { useState, useContext } from "react";
import { Form, Input, Button, FormGroup, Label } from "reactstrap";
import { AppContext } from "../../context/Context";

const Login = () => {
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

export default Login;
