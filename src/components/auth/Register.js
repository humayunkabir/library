import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  FormGroup,
  CustomInput,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import ReactAxiosRequest from "../common/ReactAxiosRequest";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const register = async rcb => {
    try {
      const response = await rcb();
      console.log(response);
    } catch (error) {
      throw Error(error);
    }
  };

  useEffect(() => {
    setIsDisabled(
      !name ||
        !email ||
        !password ||
        !confirmPassword ||
        !isAccepted ||
        password !== confirmPassword
    );
  }, [name, email, password, confirmPassword, isAccepted]);

  return (
    <Card>
      <CardBody className="fs--1 font-weight-normal p-5">
        <Row>
          <Col>
            <h5 id="modalLabel">Register</h5>
          </Col>
          <Col xs="auto">
            <p className="fs--1 text-600">
              Have an account? <Link to="/auth/login">Login</Link>
            </p>
          </Col>
        </Row>
        <ReactAxiosRequest
          method="post"
          route="auth/register"
          body={{ name, email, password, confirmPassword }}
        >
          {({ requestCallback }) => (
            <Form
              onSubmit={e => {
                e.preventDefault();
                register(requestCallback);
              }}
            >
              <FormGroup>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Email address"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  type="email"
                />
              </FormGroup>
              <div className="form-row">
                <FormGroup className="col-6">
                  <Input
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    type="password"
                  />
                </FormGroup>
                <FormGroup className="col-6">
                  <Input
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={({ target }) => setConfirmPassword(target.value)}
                    type="password"
                  />
                </FormGroup>
              </div>

              <CustomInput
                id="customCheckTerms"
                label={
                  <>
                    I accept the <Link to="#!">terms</Link> and{" "}
                    <Link to="#!">privacy policy</Link>
                  </>
                }
                checked={isAccepted}
                onChange={({ target }) => setIsAccepted(target.checked)}
                type="checkbox"
              />
              <Button
                color="primary"
                block
                className="mt-3"
                disabled={isDisabled}
              >
                Register
              </Button>
            </Form>
          )}
        </ReactAxiosRequest>
      </CardBody>
    </Card>
  );
};

export default Register;
