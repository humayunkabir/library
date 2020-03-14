import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { apiBaseUrl } from "../config";
import Axios from "axios";

class RequestException {
  constructor(message) {
    this.message = message;
    this.name = "RequestException";
  }
}

const Request = ({ type, route, body, children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = `${apiBaseUrl}/${route}`;

  const handleData = ({ data }) => {
    setData(data);
    return data;
  };

  const handleError = error => {
    const processedError = JSON.parse(JSON.stringify(error));
    setError(processedError);
    return processedError;
  };

  const cb = async props => {
    try {
      if (!(body || props)) {
        throw new RequestException("Request body is reqired");
      }
      const result = await Axios[type.toLowerCase()](url, body || props);
      return handleData(result);
    } catch (error) {
      return handleError(error);
    }
  };

  useEffect(() => {
    if (type === "GET") {
      Axios.get(url)
        .then(handleData)
        .catch(handleError);
    }
  }, [type, url]);

  return children({ data, error, cb });
};

Request.propTypes = {
  children: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["GET", "POST", "PATCH", "DELTE"]),
  route: PropTypes.string,
  body: PropTypes.object
};

Request.defaultProps = {
  type: "GET",
  route: "",
  body: null
};

export default Request;
