import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import withUser from "../hocs/withUser";

const Profile = ({ user }) => (
  <Container>
    <Row className="justify-content-center">
      <Col lg={6}>
        <Card className="my-5">
          <CardHeader className="d-flex align-items-center justify-content-between">
            Profile
            <Link to="/settings">
              <FontAwesomeIcon icon={faCog} />
            </Link>
          </CardHeader>
          <CardBody>
            <h5>{user.name}</h5>
            <p className="mb-0">{user.headline}</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default withUser(Profile);
