import { Grid, List } from "semantic-ui-react";
import User from "../user/user.type";
import AppUserList from "./AppUserList";
import UserForm from "../user/form/UserForm";


interface Props {
    users: User[];
}
export default function AppUserDashboard({ users }: Props) {


    return (
        <Grid>
            < Grid.Column width='10'>
                <AppUserList users={users} />
            </Grid.Column>
            <Grid.Column width ='5'>
                <UserForm/>
            </Grid.Column>
        </Grid>
    )
}