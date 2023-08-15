import { Segment, Item, Button } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { SyntheticEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

//Pass User List as a prop
//pass select user function as a prop

//pass props into User list function
export default observer( function UserList(){
   
    const{appUserStore} =useStore();
    const{userByName: users_state, deleteUser: deleteUser_function, loading: loading_state}=appUserStore
    const [target, setTarget] = useState('');

    function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteUser_function(id);
    }
   
    
    return(
        <Segment>
            <Item.Group divided>
                {users_state.map(user => (
                    <Item key={user.id}>
                        <Item.Content>
                            <Item.Header as='u'>{user.firstName} {user.lastName}</Item.Header>
                            <Item.Meta>{user.id}</Item.Meta>
                            <Item.Description>
                                <div>{user.email}</div>
                                <div>{user.username}</div>
                            </Item.Description>
                            <Item.Extra>
                                {/* Replace onClick function with Link to User details route (onClick={()=> openForm(user_state.id)}) */}
                                <Button as={Link} to={`/appUsers/${user.id}`} floated='right'
                                content='View' primary/>
                                 <Button 
                                 loading={loading_state && target === user.id}
                                 onClick={(e)=>handleUserDelete(e,user.id)} floated='right'
                                content='Delete' 
                                secondary/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
    
})
