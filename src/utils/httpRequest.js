import axios from 'axios';

console.log(process.env);

const httpRequest = axios.create({
  // cái api bên .env
  baseURL: process.env.REACT_APP_BASE_URL,
});

// khi gọi async nó sẽ trả về 1 Promise
export const get = async (path, options = {}) => {
  const reponse = await httpRequest.get(path, options);
  //   get data ở bên này r
  return reponse.data;
};

export default httpRequest;
