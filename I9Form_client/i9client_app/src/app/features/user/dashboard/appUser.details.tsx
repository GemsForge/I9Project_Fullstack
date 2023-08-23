import { Button, Card, Grid, Image, List } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import LoadingComponent from "../../../layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailHeader from "../details/appUserDetails.header";
import ActivityDetailChat from "../details/appUserDetails.chat";
import ActivityDetailInfo from "../details/appUserDetails.info";
import ActivityDetailSidebar from "../details/appUserDetails.sidebar";



export default observer(function AppUserDetails() {
    const { appUserStore } = useStore();
    //destructure object state from the store
    const { selectedUser: user_state, loadingInitial, loadUser } = appUserStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadUser(id);
    }, [id, loadUser]) //<== dependencies: id & loaduser

    //Check to see if user exist/ Temp solution
    if (loadingInitial || !user_state) return <LoadingComponent content="Loading Application" />; //<- componenet wont be displayed

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailHeader/>
                <ActivityDetailInfo/>
                <ActivityDetailChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailSidebar/>
            </Grid.Column>
        </Grid>
    )
})