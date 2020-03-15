import React from "react"; // , { useEffect, useState }
import ReactAxiosRequest from "../common/ReactAxiosRequest";
import { isIterableArray } from "../../helper/utils";
import User from "./User";

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
          return <p className="text-danger">{error.message}</p>;
        }

        return loading
          ? "Loading..."
          : isIterableArray(data) && (
              <ul>
                {data.map(user => (
                  <li key={user.id}>
                    <User user={user} />
                  </li>
                ))}
              </ul>
            );
      }}
    </ReactAxiosRequest>
  );
};

export default Users;
