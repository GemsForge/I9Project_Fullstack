import { Grid, Label } from "semantic-ui-react";
import AppUserList from "./appUser.getAll";
import UserForm from "./appUser.register";
import TestBanner from "../../../../test/TestBanner";
import AppUserDetails from "./appUser.details";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite"

//add props to the function dashboard
export default observer(function AppUserDashboard() {
    const { appUserStore } = useStore();
    //destructure properties needed from the state store
    const { selectedUser, editMode } = appUserStore;


    return (
        <>
            <TestBanner />
            <Label content='HTTP Get request: GetUsers()' />
            <Grid>

                < Grid.Column width='10'>
                    <AppUserList />
                </Grid.Column>
                <Grid.Column width='5'>
                    {/* Looping the Appuser Details list with the 2 conditions.
                    1. if User at index 0
                    2. Attempts to provide User Details to UI if condition 1 exists */}
                    {/* {state_users[0] &&
                        <AppUserDetails user={state_users[0]} />} */}

                    {/* IF selectedUser exists AND The component is NOT already in editmode THEN.... */}
                    {selectedUser && !editMode &&
                        <AppUserDetails />}
                    {editMode &&
                        <UserForm />}
                </Grid.Column>
            </Grid>
        </>
    )
})