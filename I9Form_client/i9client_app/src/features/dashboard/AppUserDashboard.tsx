import { Grid, List } from "semantic-ui-react";
import User from "../types/user.type";
import AppUserList from "../AppUserList";


interface Props{
    users: User[];
}
export default function AppUserDashboard({users}: Props){

    
    return(
       <Grid>
       < Grid.Column>
       <AppUserList users={users}/>
       </Grid.Column>
       </Grid>
    )
}