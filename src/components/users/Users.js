import React from "react";
import { Row, Col, Container } from "reactstrap";
import ReactAxiosRequest from "../common/ReactAxiosRequest";
import { isIterableArray } from "../../helpers/utils";
import User from "./User";
import Debug from "../common/Debug";

const Users = () => {
  return (
    <ReactAxiosRequest route="users">
      {({ loading, data: users, error }) => {
        if (error) {
          return (
            <Container>
              <p className="text-danger">{error.message}</p>
            </Container>
          );
        }

        return (
          <Container>
            {loading
              ? "Loading..."
              : isIterableArray(users) && (
                  <Row>
                    <Col xs="auto">
                      <Debug code={JSON.stringify(users, null, 2)} />
                      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
                    </Col>
                    <Col>
                      <Row>
                        {users.map(user => (
                          <Col md={6} lg={4} className="mt-5" key={user.id}>
                            <User user={user} />
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                )}
          </Container>
        );
      }}
    </ReactAxiosRequest>
  );
};

export default Users;
