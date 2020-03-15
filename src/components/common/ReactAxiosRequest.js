import React from "react";
import Request from "./Request";
import { apiBaseUrl } from "../../config";
import token from "../../helper/token";

const ReactAxiosRequest = props => {
  const requestConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token({ type: "get" })}`
    }
  };

  // console.table({
  //   route: props.route,
  //   Authorization: requestConfig.headers.Authorization
  // });

  return <Request base={apiBaseUrl} config={requestConfig} {...props} />;
};

export default ReactAxiosRequest;
