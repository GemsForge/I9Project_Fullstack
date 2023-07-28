import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { AppUser } from './Components/Register';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import LoginView from './Components/Login/LoginForm';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import PageBanner from './Layout/PageBanner';

function App() {
  const [appUsers, setAppUsers] = useState<AppUser[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/appusers").then((response) => {
      console.log(response);
      setAppUsers(response.data);
    });
  }, []);
  return (
    <Fragment>
      <Navbar />
      {/* <Container style={{marginTop: '7em'}}>
      <Login/>
      </Container> */}
      <Container style={{marginTop: '7em'}}>
      <PageBanner/>
      </Container>
      <Container style={{marginTop: '7em'}}> 
      {/* <AppUserDashboard appUsers={appUsers}/> */}
     <LoginView/>
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default App;
