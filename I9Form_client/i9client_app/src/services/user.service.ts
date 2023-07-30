import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getApplicantBoard() {
    return axios.get(API_URL + "applicant", { headers: authHeader() });
  }

  getReviewerBoard() {
    return axios.get(API_URL + "reviewer", { headers: authHeader() });
  }
  getEmployerBoard() {
    return axios.get(API_URL + "employer", { headers: authHeader() });
  }

  getAuditorBoard() {
    return axios.get(API_URL + "auditor", { headers: authHeader() });
  }
}

export default new UserService();
