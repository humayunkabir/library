import { getToken } from "./helpers/token";

export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const requestConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
};
