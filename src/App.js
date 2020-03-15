import React from "react";
import { Card, CardBody, CardHeader, Container, Row, Col } from "reactstrap";
import ReactAxiosRequest from "./components/common/ReactAxiosRequest";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Users from "./components/user/Users";
import useAppState from "./hook/useAppState";

const App = () => {
  const state = useAppState();

  return (
    <Container>
      <Row className="align-items-center vh-100">
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
        <Col>
          {state.user ? (
            <>
              <Logout />
              <br />
              <Users />
            </>
          ) : (
            <Login />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
