import { Segment, Form, Header, Button } from "semantic-ui-react";

export default function LoginForm() {
    return (
        
        <Segment>
            <Header as='h4' color="violet" content='ADP Onboarding' subheader='Login' />
            
            <Form>
                <Form.Input type="text" placeholder='Username' />
                <Form.Input type="password" placeholder='Password' />
                <Button primary > Login</Button>
                <Button secondary > Register</Button>
            </Form>
        </Segment>
    )
}