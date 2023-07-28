import { Segment, Form, Button, Icon, Popup } from "semantic-ui-react";


export default function Login(){ 
    return (
  <div className="logincontainer">
    <Segment inverted className="segment-container">
      <Form
        inverted
        className="form-container"
        onSubmit={() => alert("clicked")}
      >
        <Form.Group widths="equal">
          <Icon name="user" />
          <Popup
            trigger={
              <Form.Input
                fluid
                label="Username"
                placeholder="username@email.com"
              />
            }
          >
            {/* Popup content upon hover */}
            <Popup.Content>
              Enter a valid Username
            </Popup.Content>
          </Popup>
        </Form.Group>
        <Form.Group widths="equal">
          <Icon name="key" />
          <Popup
            trigger={
              <Form.Input
                fluid
                label="Password"
                type="Password"
                placeholder="8 digit Password"
              />
            }
          >
            <Popup.Content>Enter a valid Password</Popup.Content>
          </Popup>
        </Form.Group>
        <Button animated fluid type="submit">
          <Button.Content visible>Log In</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-in" />
          </Button.Content>
        </Button>
      </Form>
    </Segment>
  </div>
);
}
