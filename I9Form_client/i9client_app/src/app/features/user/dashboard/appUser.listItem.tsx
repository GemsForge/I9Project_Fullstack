import { Button, Icon, Item, Segment } from "semantic-ui-react";
import User from "../user.type";
import { Link } from "react-router-dom";
import { useState, SyntheticEvent } from "react";
import { useStore } from "../../../stores/store";


interface Props {
    user: User
}
export default function AppUSerListItem({ user }: Props) {
    const { appUserStore } = useStore();
    const { deleteUser: deleteUser_function, loading: loading_state } = appUserStore
    const [target, setTarget] = useState('');

    function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteUser_function(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src="/assets/images/avatar.svg" />
                        <Item.Content>

                            <Item.Header as={Link} to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Item.Header>
                            <Item.Meta>{user.id}</Item.Meta>

                        </Item.Content>
                    </Item>
                </Item.Group>

            </Segment>
            <Segment clearing>
                <span>
                    <Icon name='mail' /> {user.email}
                    <br />
                    <Icon name='user' /> {user.username}
                </span>
                
                    <Button as={Link} to={`/appUsers/${user.id}`} floated='right'
                        content='View' primary />
                
                    <Button
                        loading={loading_state && target === user.id}
                        onClick={(e) => handleUserDelete(e, user.id)} floated='right'
                        content='Delete'
                        secondary />
              
            </Segment>

        </Segment.Group>
    )
}