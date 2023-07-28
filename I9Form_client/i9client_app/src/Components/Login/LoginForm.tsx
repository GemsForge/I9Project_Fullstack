import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function LoginView() {
  return (
    <Segment>
        <Header as="h2" content="ADP Onboarding"/>
        <div>
        <Header as='h' content='Login'/>
        </div>
        <br></br>
      <Form>
        <Form.Input placeholder= 'Username' label='Username'/>
        <Form.Input placeholder= 'Password' label='Password'/>
        <Button floated= 'right' positive type='submit'content='Login'>Login
        </Button>
        <Button floated= 'right'  type='button'content='Login'>Register
        </Button>
      </Form>
    </Segment>
  );
}
