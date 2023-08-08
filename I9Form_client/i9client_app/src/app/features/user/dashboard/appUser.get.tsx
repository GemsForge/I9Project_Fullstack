import { Button, ButtonGroup, Label, Segment } from "semantic-ui-react";

export default function GetUserComponent() {

    return (
        <>
            <Label> Http Get: GetUser(id) </Label>
            <Segment>
                <p>
                    Select button to retrieve app user info. 
                </p>
                <ButtonGroup vertical compact  color="blue" >
                    <Button  icon='user' content='Charis Kermitt' />

                    <Button icon='user' content='Bradly Stacey' />
                    <Button icon='user' content='Eleen Organ' />
                    <Button icon='user' content='Idalia Littell' />
                </ButtonGroup>
            </Segment>
        </>
    )
}