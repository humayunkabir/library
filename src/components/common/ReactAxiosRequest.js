import React from "react";
import { apiBaseUrl } from "../../config";
import { getToken } from "../../helpers/token";
import { Request } from "react-axios-request";

const ReactAxiosRequest = props => {
  const requestConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    }
  };

  return <Request base={apiBaseUrl} config={requestConfig} {...props} />;
};

export default ReactAxiosRequest;
