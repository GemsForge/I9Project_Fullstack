import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/appuser";

//Add a generic type ("<T>")
const responseBody = (response: AxiosResponse) => response.data;

const request = {
  //request will take a URl THEN store in the response body (server response body from url)
  get: (url: string) => axios.get(url).then(responseBody),
  //post &put req take url and body:{}
  post: (url: string, body: {}) => axios.post(url).then(responseBody),
  put: (url: string, body: {}) => axios.put(url).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};


const Users={
    //The request endpoint from the server
    //Returns a promise of type 'any' at the moment
    //"Http get: GetUser()"
    list: () => request.get('/')
}
const User={
    //The request endpoint from the server that returns a promise
    //Http get: GetUser({id}
    user: () => request.get('/register')
}
const NewUser={
    //Http post: RegisterUser()

}

const agent ={
    //the file will contatin the http request
    Users,
    User,
    NewUser

}

export default agent;