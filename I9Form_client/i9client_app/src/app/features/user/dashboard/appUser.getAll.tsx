import { Segment, Item } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import AppUSerListItem from "./appUser.listItem";
import { Fragment } from "react";

export default observer(function UserList() {
    const { appUserStore } = useStore();
    const { userByName } = appUserStore

    return (
        <>
            <Fragment>
                {userByName.map(user => (
                    <AppUSerListItem key={user.id} user={user} />
                ))}
            </Fragment>
        </>
    )
})
