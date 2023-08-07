import { Segment, Item } from "semantic-ui-react";
import User from "../user.type";

interface Props{
    users: User[];
}

export default function UserList({users}: Props){
    return(
        <Segment>
            <Item.Group divided>
                {users.map(user => (
                    <Item key={user.id}>
                        <Item.Content>
                            <Item.Header as='u'>{user.firstName} {user.lastName}</Item.Header>
                            <Item.Meta>{user.id}</Item.Meta>
                            <Item.Description>
                                <div>{user.email}</div>
                                <div>{user.username}</div>
                            </Item.Description>
                             
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
    
}