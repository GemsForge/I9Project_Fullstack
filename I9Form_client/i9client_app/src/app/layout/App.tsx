import {  useEffect,  useState } from 'react';
import '../layout/styles.css';
import {  Header, List } from 'semantic-ui-react';
import axios from 'axios';


function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/appuser').then(response => {
      setUsers(response.data);
    })
  })
  return (
    <div >
      <Header as='h2' icon='user' content='App Users'/>
      <List>
        {users.map((user: any) => (
          <List.Item key={user.id}>
            
            {user.firstName} {user.lastName}
          

          </List.Item>
        ))}

      </List>
    </div>
  );
}

export default App;
