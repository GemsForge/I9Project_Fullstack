import { Grid, Label } from "semantic-ui-react";
import AppUserList from "./appUser.getAll";
import TestBanner from "../../../../test/TestBanner";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import LoadingComponent from "../../../layout/LoadingComponent";

//add props to the function dashboard
export default observer(function AppUserDashboard() {
    //OBJECT STATES
    const { appUserStore } = useStore();
    const{loadUsers, userRegistry} = appUserStore;
    useEffect(() => {
      if(userRegistry.size <= 1 ) loadUsers()
    }, [userRegistry.size, loadUsers])
    // We can make HTTP requests when the component mounts by calling the useEffect hook with an empty array in the 2nd argument.
    // axios.get<User[]>('http://localhost:5000/api/appuser').then(response => {
    //   setUsers(response.data);

    //no need for local state. Get object state from the store

    if (appUserStore.loadingInitial) return <LoadingComponent content='Loading application' />


    return (
        <>
            <TestBanner />
            <Label content='HTTP Get request: GetUsers()' />
            <Grid>

                < Grid.Column width='10'>
                    <AppUserList />
                </Grid.Column>
                <Grid.Column width='5'>
                    <h2>Activity Filters</h2>
                </Grid.Column>
            </Grid>
        </>
    )
})