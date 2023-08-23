import { Button, Item } from "semantic-ui-react";
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
                        content='View' primary />
                    <Button
                        loading={loading_state && target === user.id}
                        onClick={(e) => handleUserDelete(e, user.id)} floated='right'
                        content='Delete'
                        secondary />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}