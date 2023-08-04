import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function RegisterForm() {
    return (

        <Segment>
            <Header as='h4' color="violet" content='ADP Onboarding' subheader='Activation' />

            <Form>
                <Form.Input type="text" placeholder='Enter First Name' />
                <Form.Input type="text" placeholder='Enter Last Name' />
                <Form.Input type="email" placeholder='Enter Employee Email' />
                <Form.Input type="password" placeholder='Create Password' />
                <Form.Input type="password" placeholder='Confirm Password' />
                <Button primary> Activate User Access</Button>
                <Button secondary > Login</Button>
            </Form>
        </Segment>
    )
}