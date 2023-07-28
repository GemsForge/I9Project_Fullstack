//using a card to display user info
import { Card, Image } from "semantic-ui-react";
import { Props } from "./AppUserDashboard";


export default function AppUserCard({ appUsers }: Props) {
    return (
        <Card>
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
            <Card.Content>
                {/* <Card.Header>{appUsers.firstName}</Card.Header> */}
                <Card.Meta>
                    {/* <span className="username"> Username: {appUsers.username}</span> */}
                    <br />
                    {/* <span className="email"> Email: {appUsers.email}</span> */}
                </Card.Meta>
                <Card.Description></Card.Description>
            </Card.Content>
        </Card>
    );
}


