import React from "react";
import { Card, CardBody } from "reactstrap";
import useQuery from "../../hooks/useQuery";
import { sent } from "./base64";
import ButtonLogin from "./ButtonLogin";

const ConfirmMail = ({ location: { search } }) => (
  <Card>
    <CardBody className="fs--1 font-weight-normal p-5 text-center">
      <img src={sent} alt="sent" width="70" className="d-block mx-auto mb-4" />
      <h4>Please check your email!</h4>
      <p>
        An email has been sent to{" "}
        <strong>{useQuery(search).get("email")}</strong>. Please click on the
        included link to reset your password.
      </p>
      <ButtonLogin />
    </CardBody>
  </Card>
);

export default ConfirmMail;
