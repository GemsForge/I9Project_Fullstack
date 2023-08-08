import { Segment, Item, Button } from "semantic-ui-react";
import User from "../user.type";

//Pass User List as a prop
//pass select user function as a prop
interface Props{
    users_state: User[];
      //passing function as prop  => return type void
    selectUser_function: (id: string) => void;
    

}
//pass props into User list function
export default function UserList({users_state,selectUser_function}: Props){
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
                                {/* waits for the onClick event */}
                                <Button onClick={()=>selectUser_function(user.id)} floated='right'
                                content='View' primary/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
    
}