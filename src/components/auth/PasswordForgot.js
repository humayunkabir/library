import React, { useState } from "react";
import { Card, CardBody, Input, FormGroup, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";
import ReactAxiosRequest from "../common/ReactAxiosRequest";

const PasswordForgot = ({ history: { push } }) => {
  const [email, setEmail] = useState("humayunkabir.cep@gmail.com");

  const sendMail = async rcb => {
    try {
      const {
        loading,
        data: { message, success }
      } = await rcb();

      console.log(loading);

      if (success) {
        push(`/auth/confirm-mail?email=${email}`);
      } else {
        alert(message);
      }
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <Card>
      <CardBody className="fs--1 font-weight-normal p-5 text-center">
        <h5 className="mb-0"> Forgot your password?</h5>
        <small>Enter your email and we'll send you a reset link.</small>
        <ReactAxiosRequest
          route="auth/password-forgot"
          method="post"
          body={{ email }}
        >
          {({ requestCallback }) => {
            return (
              <Form
                className="mt-4"
                onSubmit={e => {
                  e.preventDefault();
                  sendMail(requestCallback);
                }}
              >
                <FormGroup className="form-group">
                  <Input
                    placeholder="Email address"
                    type="email"
                    className="form-control form-control"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Button color="primary" block disabled={!email}>
                    Send reset link
                  </Button>
                </FormGroup>
                <Link className="fs--1 text-600" to="">
                  I can't recover my account using this page
                  <span className="d-inline-block ml-1">→</span>
                </Link>
              </Form>
            );
          }}
        </ReactAxiosRequest>
      </CardBody>
    </Card>
  );
};

export default PasswordForgot;
