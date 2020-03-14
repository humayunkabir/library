import React from "react";
import { Card, CardBody, CardHeader, Container, Row, Col } from "reactstrap";
import Login from "./components/auth/Login";
import Request from "./rpc/Request";

const App = () => (
  <Container>
    <Row className="align-items-center vh-100">
      <Col md={6}>
        <Request>
          {({ data }) => (
            <Card>
              <CardHeader>
                <h4 className="mb-0">{data?.name}</h4>
              </CardHeader>
              <CardBody>
                <p className="mb-0">{data?.description}</p>
              </CardBody>
            </Card>
          )}
        </Request>
      </Col>
      <Col>
        <Login />
      </Col>
    </Row>
  </Container>
);

export default App;
