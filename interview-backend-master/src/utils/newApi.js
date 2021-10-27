const axios = require("axios").default;

const getData = async (url) => {
  let response = await axios.get(url);
  if (response.status == 200) {
    client_res = {
      status: 1,
      data: response.data,
    };
    return client_res;
  }
  client_res = {
    status: 0,
    data: [],
  };
  return client_res;
};

module.exports = getData;
