import { Button, Form, Label, Segment } from "semantic-ui-react";
import User from "../user.type";

interface Props{
    //make sure state is either User Objet or Undefined
    user_state: User | undefined;
    closeForm_function: () => void;
    
}
export default function UserFrom({user_state, closeForm_function}: Props) {
    
   
    return (
        <>
            <Label>HTTP Post request: RegisterUser() </Label>
            <Segment clearing>

                <Form>
                    <Form.Input placeholder='First Name' />
                    <Form.Input placeholder='Last Name' />
                    <Form.Input placeholder='Email Adress' />
                    <Form.Input placeholder='Contact number' />
                    <Button floated='right' positive  type='submit' content='Submit'/>
                    <Button onClick={closeForm_function} floated='right' basic type='button' content='Cancel'/>
                </Form>
            </Segment>
        </>

    )
}