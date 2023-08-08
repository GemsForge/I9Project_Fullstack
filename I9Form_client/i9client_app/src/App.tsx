import { useEffect, useState } from 'react';
import './app/layout/styles.css';
import { Container } from 'semantic-ui-react';

import User from './app/features/user/user.type';
import NavBar from './app/layout/NavBar';
// import ApplicantView from './app/layout/applicant/applicant.portal';
import AppUserDashboard from './app/features/user/dashboard/appUser.dashboard';
import agent from './app/api/agent';


function App() {
  //OBJECT STATES
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {

    // We can make HTTP requests when the component mounts by calling the useEffect hook with an empty array in the 2nd argument.
    // axios.get<User[]>('http://localhost:5000/api/appuser').then(response => {
    //   setUsers(response.data);
    agent.Users.list().then(response => {
      setUsers(response);
    })
  }, [])


  function handleSelectUser(id: string ) {
    setSelectedUser(users.find(response => response.id === id ));

  }
  //setUser == undefinded
  function handleCancelSelectUser() {
    setSelectedUser(undefined);
  }
 //TODO: pass function to the navBar add User button
  function handleFormOpen(id?: string){
    //IF onClick={(id)}
    id? handleSelectUser(id) : handleCancelSelectUser();
    setEditMode(true);
  }
  function handleFormClose(){
    //IF onClick={()}
    setEditMode(false);
  }
  //pass the following properties to the appUser dashboard
  return (
    <div >
      <NavBar 
       openForm_function={handleFormOpen}
       />
      <Container style={{ marginTop: "7em" }}>
        <AppUserDashboard
          users_state={users}
          selectedUser_state={selectedUser}
          selectUser_function={handleSelectUser}
          cancelSelectUser_function={handleCancelSelectUser}
          //Don't forget to set the state in chld components
          editMode_state={editMode}
          openForm_function={handleFormOpen}
          closeForm_function={handleFormClose}/>
        {/* <LoginView/>  */}
        {/* <RegisterView/> */}
        {/* <ApplicantView/> */}
      </Container>

    </div>
  );
}

export default App;
