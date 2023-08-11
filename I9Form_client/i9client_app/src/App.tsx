import { useEffect } from 'react';
import './app/layout/styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './app/layout/NavBar';
// import ApplicantView from './app/layout/applicant/applicant.portal';
import AppUserDashboard from './app/features/user/dashboard/appUser.dashboard';
import LoadingComponent from './app/layout/LoadingComponent';
import { useStore } from './app/stores/store';
import { observer } from "mobx-react-lite"


function App() {
  const { appUserStore } = useStore();
  //OBJECT STATES

  useEffect(() => {
    appUserStore.loadUsers()
  }, [appUserStore])
  // We can make HTTP requests when the component mounts by calling the useEffect hook with an empty array in the 2nd argument.
  // axios.get<User[]>('http://localhost:5000/api/appuser').then(response => {
  //   setUsers(response.data);

  //no need for local state. Get object state from the store

  if (appUserStore.loadingInitial) return <LoadingComponent content='Loading application' />

  //pass the following properties to the appUser dashboard
  return (
    <div >
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <AppUserDashboard />
        {/* <LoginView/>  */}
        {/* <RegisterView/> */}
        {/* <ApplicantView/> */}
      </Container>

    </div>
  );
}
//This will observe all of the observer in the component
export default observer(App);
