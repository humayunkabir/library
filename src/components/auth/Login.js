import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import useAuth from "../../hooks/useAuth";
import ReactAxiosRequest from "../common/ReactAxiosRequest";

const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("test");

  const cleanUp = () => {
    setUsername("");
    setPassword("");
  };

  console.log("Hello from Login!!");

  return (
    <Container>
      <Row className="align-items-center vh-100">
        <Col md={6}>
          <ReactAxiosRequest>
            {({ loading, data }) =>
              loading ? (
                "Loading..."
              ) : (
                <Card>
                  <CardHeader>
                    <h4 className="mb-0">{data?.name}</h4>
                  </CardHeader>
                  <CardBody>
                    <p className="mb-0">{data?.description}</p>
                  </CardBody>
                </Card>
              )
            }
          </ReactAxiosRequest>
        </Col>
        <Col>
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
                      <Label htmlFor="password">Passowrd</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                      />
                    </FormGroup>
                    <Button
                      color="primary"
                      block
                      disabled={!username || !password}
                    >
                      Login
                    </Button>

                    {error && (
                      <p className="text-danger mt-2">
                        Username and/or Passowrd do(es)n't match. Please try
                        again.
                        <br />
                        <small className="text-italic">{error.message}</small>
                      </p>
                    )}
                  </Form>
                </>
              );
            }}
          </ReactAxiosRequest>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
