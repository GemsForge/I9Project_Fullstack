import { Grid } from "semantic-ui-react";
import { AppUser } from "./Register";
import AppUserCard from "./AppUserCard";
import AppUserList from "./AppUserList";

export interface Props {
    appUsers: AppUser[];
    // selectedAppUser: AppUser;
    // selectedActivity: (id: string) => void;
    // cancelSelectedActivity: () => void;
}

//pass AppUser attributes as a prop to the List map
export default function AppUserDashboard({ appUsers }: Props) {
    return (
        <Grid>
            <Grid.Column width="6">
                <AppUserCard appUsers={[]} />
            </Grid.Column>
            <Grid.Column width="10">
                <AppUserList appUsers={appUsers} />
            </Grid.Column>
        </Grid>
    );
}

