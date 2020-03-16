import React from "react"; // , { useEffect, useState }
import ReactAxiosRequest from "../common/ReactAxiosRequest";
import { isIterableArray } from "../../helpers/utils";
import User from "./User";
import { Row, Col, Container } from "reactstrap";

// import Axios from "axios";
// import { apiBaseUrl } from "../../config";
// import token from "../../helper/token";

const Users = () => {
  // const [users, setUsers] = useState(null);

  // useEffect(() => {
  //   if (state.user) {
  //     const requestConfig = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token({ type: "get" })}`
  //       }
  //     };

  //     Axios.get(`${apiBaseUrl}/users`, requestConfig)
  //       .then(res => {
  //         setUsers(res.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         setUsers(null);
  //       });
  //   } else {
  //     setUsers(null);
  //   }
  // }, [state]);

  // return <pre>{JSON.stringify(users, null, 2)}</pre>;

  return (
    <ReactAxiosRequest route="users">
      {({ loading, data, error }) => {
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
              : isIterableArray(data) && (
                  <Row>
                    {data.map(user => (
                      <Col md={6} lg={4} className="mt-5" key={user.id}>
                        <User user={user} />
                      </Col>
                    ))}
                  </Row>
                )}
          </Container>
        );
      }}
    </ReactAxiosRequest>
  );
};

export default Users;
