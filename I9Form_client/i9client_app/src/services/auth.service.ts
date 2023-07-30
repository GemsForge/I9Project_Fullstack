import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:5000/api/";


export async function login (username: string, password: string): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios
        .post(API_URL + "authenticate", {
          username,
          password
        })
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }
  
    function logout(): void {
    localStorage.removeItem("user");
}
  
    const register = (username: string, email: string, password: string) =>{
      return axios.post(API_URL + "register", {
        username,
        email,
        password
      });
    }
    function getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
    
        return null;
      }
      export const AuthService = {
        login,
        register,
        logout,
        getCurrentUser
    }
    

