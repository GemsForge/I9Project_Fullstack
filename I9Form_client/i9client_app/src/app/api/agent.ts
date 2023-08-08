import axios, { AxiosResponse } from "axios";
import User from "../features/user/user.type";

//1. LOADING: Add sleep logic
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api/appuser";

//2. LOADING: Define axios response for loading
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
})

//Add a generic type ("<T>") => Types the response object => <T> == <User>
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  //request will take a URl THEN store in the response body (server response body from url)
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  //post &put req take url and body:{}
  post: <T>(url: string, body: {}) => axios.post<T>(url).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Users = {
  //The request endpoint from the server
  //Returns a promise of type 'any' at the moment
  //"Http get: GetUser()"
  list: () => request.get<User[]>("/"),
};
// const User={
//     //The request endpoint from the server that returns a promise
//     //Http get: GetUser({id}
//     user: () => request.get<User>('/register')
// }
const NewUser = {
  //Http post: RegisterUser()
};

const agent = {
  //the file will contatin the http request
  Users,
  // User,
  NewUser,
};

export default agent;
