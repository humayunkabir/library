import React, { useState } from "react";
import { Card, CardBody, Input, FormGroup, Button, Form } from "reactstrap";
import ReactAxiosRequest from "../common/ReactAxiosRequest";

const PasswordReset = ({ history: { push } }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPassword = rcb => {
    rcb()
      .then(({ data: { message, success } }) => {
        alert(message);
        if (success) push("/auth/login");
      })
      .catch(error => {
        throw Error(error);
      });

    // try {
    //   const {
    //     loading,
    //     data: { message, success }
    //   } = await rcb();
    //   console.log(loading);
    //   if (success) {
    //     console.log(message);
    //   } else {
    //     alert(message);
    //   }
    // } catch (error) {
    //   throw Error(error);
    // }
  };

  return (
    <Card>
      <CardBody className="fs--1 font-weight-normal p-5 text-center">
        <h5>Reset new password</h5>
        <ReactAxiosRequest
          method="post"
          route="auth/password-reset"
          body={{ newPassword, confirmPassword }}
        >
          {({ requestCallback }) => (
            <Form
              className="mt-3"
              onSubmit={e => {
                e.preventDefault();
                resetPassword(requestCallback);
              }}
            >
              <FormGroup>
                <Input
                  placeholder="New Password"
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={({ target }) => setNewPassword(target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={({ target }) => setConfirmPassword(target.value)}
                />
              </FormGroup>
              <Button
                disabled={
                  !(
                    newPassword &&
                    confirmPassword &&
                    newPassword === confirmPassword
                  )
                }
                color="primary"
                block
                className="mt-3"
              >
                Set password
              </Button>
            </Form>
          )}
        </ReactAxiosRequest>
      </CardBody>
    </Card>
  );
};

export default PasswordReset;
