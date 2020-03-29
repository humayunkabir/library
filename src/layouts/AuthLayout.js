import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import ReactAxiosRequest from "../components/common/ReactAxiosRequest";

const AuthLayout = ({ children }) => (
  <Container>
    <Row className="align-items-center justify-content-center h-banner">
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
      <Col lg={6}>{children}</Col>
    </Row>
  </Container>
);

export default AuthLayout;
