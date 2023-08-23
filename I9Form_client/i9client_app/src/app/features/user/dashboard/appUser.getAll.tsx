import { Segment, Item } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import AppUSerListItem from "./appUser.listItem";

export default observer(function UserList() {
    const { appUserStore } = useStore();
    const { userByName } = appUserStore

    return (
        <Segment>
            <Item.Group divided>
                {userByName.map(user => (
                    <AppUSerListItem key={user.id} user={user} />
                ))}
            </Item.Group>
        </Segment>
    )
})
