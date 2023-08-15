import { Button, Card, Image, List } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import LoadingComponent from "../../../layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";



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

        <Card>
            {/* TODO: add profile picture blob property to app user entity */}
            {/* <Image src={`/assets/images/${user.profile_image}`}/> */}
            <Image size="small" src={'/assets/images/avatar.svg'} />

            <Card.Content>

                <Card.Header content={`${user_state.firstName} ${user_state.lastName}`} />
                <Card.Meta content={user_state.id}></Card.Meta>
                <Card.Description>
                    <List.Item>{<strong>User Email:</strong>} User Email: {user_state.email}</List.Item>
                    <List.Item> {<strong>User Username:</strong>} {user_state.username}</List.Item>
                    <List.Item> {<strong>User Password:</strong>} {user_state.password}</List.Item>
                </Card.Description>

            </Card.Content>


            <Card.Content extra>
                <Button.Group width='2'>
                    <Button as={Link} to={`/manageUser/${user_state.id}`} basic secondary content='Edit' />
                    <Button basic negative content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>



    )
})