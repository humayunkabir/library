import Axios from "axios";

const useRequest = async ({
  method = "get",
  base,
  route = "",
  body,
  config
}) => {
  console.log({ base, route, body, config });
  const url = base + (route && `/${route}`);

  let response = null;

  try {
    if (method === "get") {
      response = await Axios[method](url, config);
    } else {
      response = await Axios[method](url, body, config);
    }
  } catch (error) {
    console.log(JSON.parse(JSON.stringify(error)));
  }

  return response;
};

export default useRequest;
