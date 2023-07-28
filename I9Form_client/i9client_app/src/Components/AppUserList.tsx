import { Item, List, Segment } from "semantic-ui-react";
import { Props } from "./AppUserDashboard";

export default function AppUserList({ appUsers }: Props) {
    return (
        <Segment>
            <Item.Group>
                {
                    appUsers.map((appUser) => (
                        <Item key={appUser.id} >
                            <Item.Content >
                                <Item.Header as="a">
                                    {appUser.firstName} {appUser.lastName}
                                </Item.Header>
                                <Item.Meta>Applicant</Item.Meta>
                                <Item.Description>
                                    <div>Email: {appUser.email}</div>
                                    <div>Username: {appUser.username}</div>
                                    <div>Password: {appUser.password}</div>
                                </Item.Description>
                            </Item.Content>

                        </Item>
                    ))
                }
            </Item.Group>
        </Segment>

    );
}

