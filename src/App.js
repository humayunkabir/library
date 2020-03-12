import React, { useContext } from "react";
import { AppContext } from "./context/Context";
import { Card, CardBody, CardHeader, Container, Row, Col } from "reactstrap";
import Login from "./components/auth/Login";

const App = () => {
  const { appInfo } = useContext(AppContext);

  return appInfo ? (
    <Container>
      <Row className="align-items-center vh-100">
        <Col md={6}>
          <Card>
            <CardHeader>
              <h4 className="mb-0">{appInfo.name}</h4>
            </CardHeader>
            <CardBody>
              <p className="mb-0">{appInfo.description}</p>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Login />
        </Col>
      </Row>
    </Container>
  ) : null;
};

export default App;
