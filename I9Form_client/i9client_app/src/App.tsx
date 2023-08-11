
import './app/layout/styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './app/layout/NavBar';
import { observer } from "mobx-react-lite"
import { Outlet } from 'react-router-dom';


function App() {
 
  //pass the following properties to the appUser dashboard
  return (
    <div >
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Outlet />
        {/* <LoginView/>  */}
        {/* <RegisterView/> */}
        {/* <ApplicantView/> */}
      </Container>

    </div>
  );
}
//This will observe all of the observer in the component
export default observer(App);
