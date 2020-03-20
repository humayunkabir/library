import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const User = ({ user }) => (
  <Card>
    <CardHeader>{user.name}</CardHeader>
    <CardBody>{user.headline}</CardBody>
  </Card>
);

export default User;
