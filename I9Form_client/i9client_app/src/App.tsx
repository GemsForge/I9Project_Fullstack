import { useEffect, useState } from 'react';
import './app/layout/styles.css';
import { Container } from 'semantic-ui-react';

import User from './app/features/user/user.type';
import NavBar from './app/layout/NavBar';
// import ApplicantView from './app/layout/applicant/applicant.portal';
import AppUserDashboard from './app/features/user/dashboard/appUser.dashboard';
import agent from './app/api/agent';


function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    // We can make HTTP requests when the component mounts by calling the useEffect hook with an empty array in the 2nd argument.
    // axios.get<User[]>('http://localhost:5000/api/appuser').then(response => {
    //   setUsers(response.data);

    
    agent.Users.list().then(response => {
      setUsers(response); 
    })
  }, [])

  return (
    <div >
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <AppUserDashboard users={users} />
        {/* <LoginView/>  */}
        {/* <RegisterView/> */}
        {/* <ApplicantView/> */}
      </Container>

    </div>
  );
}

export default App;
