import { useEffect, useState } from 'react';
import '../layout/styles.css';
import { Container, Header, List } from 'semantic-ui-react';
import axios from 'axios';
import User from '../features/user/user.type';
import NavBar from './NavBar';
import AppUserDashboard from '../features/dashboard/AppUserDashboard';
import LoginView from './authentication/Login/login_view';
import RegisterView from './authentication/Register/register_view';
import ApplicantView from './applicant/applicant.portal';


function App() {

  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    // specify types in HTTP request
    axios.get<User[]>('http://localhost:5000/api/appuser').then(response => {
      setUsers(response.data);
    })
  })
  return (
    <div >
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        {/* <AppUserDashboard users={users} /> */}
        {/* <LoginView/> */}
        {/* <RegisterView/> */}
        <ApplicantView/>
      </Container>

    </div>
  );
}

export default App;
