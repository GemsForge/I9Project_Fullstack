
import './app/layout/styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './app/layout/NavBar';
import { observer } from "mobx-react-lite"
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from './app/features/home/HomePage';


function App() {
  const location = useLocation(); //Which path has the user gone too.

  //pass the following properties to the appUser dashboard
  return (
    <>
      {/* CHECK path nmae  */}
      {location.pathname === '/' ? <HomePage /> :
        (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              {/* Outlet gets swapped with the selected component route */}
              <Outlet />
              {/* <LoginView/>  */}
              {/* <RegisterView/> */}
              {/* <ApplicantView/> */}
            </Container>
          </>
        )
      }
    </>
  );
}
//This will observe all of the observer in the component
export default observer(App);
