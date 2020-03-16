import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const User = ({ user }) => (
  <Card>
    <CardHeader>{user.name}</CardHeader>
    <CardBody>
      <ul className="list-unstyled mb-0">
        <li>id: {user.id}</li>
        <li>username: {user.username}</li>
      </ul>
    </CardBody>
  </Card>
);

export default User;
