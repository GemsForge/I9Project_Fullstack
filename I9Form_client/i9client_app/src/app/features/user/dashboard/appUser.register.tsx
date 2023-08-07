import { Form, Label, Segment } from "semantic-ui-react";

export default function UserFrom() {
    return (
        <>
            <Label>HTTP Post request: RegisterUser() </Label>
            <Segment>

                <Form>
                    <Form.Input placeholder='First Name' />
                    <Form.Input placeholder='Last Name' />
                    <Form.Input placeholder='Email Adress' />
                    <Form.Input placeholder='Contact number' />
                </Form>
            </Segment>
        </>

    )
}