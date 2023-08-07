import { Grid, Label, List } from "semantic-ui-react";
import User from "../user.type";
import AppUserList from "./appUser.getAll";
import UserForm from "./appUser.register";
import TestBanner from "../../../../test/TestBanner";
import GetUserComponent from "./appUser.get";



interface Props {
    users: User[];
}
export default function AppUserDashboard({ users }: Props) {


    return (
        <> 
        <TestBanner/>
        <Label content='HTTP Get request: GetUsers()'/>
            <Grid>
                
                < Grid.Column width='10'>
                    <AppUserList users={users} />
                </Grid.Column>
                <Grid.Column width='5'>
                    <UserForm />
                    <GetUserComponent/>
                </Grid.Column>   
            </Grid>
        </>
    )
}