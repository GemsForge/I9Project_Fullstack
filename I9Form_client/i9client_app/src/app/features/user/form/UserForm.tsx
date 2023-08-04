import { Form, Segment } from "semantic-ui-react";

export default function UserFrom(){
    return(
        <Segment>
            <Form>
                <Form.Input placeholder='First Name'/>
                <Form.Input placeholder='Last Name'/>
                <Form.Input placeholder='Email Adress'/>
                <Form.Input placeholder='Contact number'/>
            </Form>
        </Segment>
    )
}