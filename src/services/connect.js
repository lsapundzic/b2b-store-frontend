import axios from "axios";

const cmsAddress = "http://localhost:1337/products";

let cmsGet = () => {
  return axios.get(cmsAddress);
};

export default { cmsGet };
