import { Button, Form, Label, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";


export default observer( function UserFrom() {
    const { appUserStore } = useStore();
    //Destructure props from the store
    const { selectedUser: selectedUser_state, createUser, updateUser, loading: loading_state } = appUserStore;


    //Set initialstate of the form inputs
    //IF User exist THEN set state to...
    const initialstate = selectedUser_state ?? {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    }

    //RESET initial state
    const [user_state, setUser_state] = useState(initialstate);

    //HANDLE SUBMIT
    function handleSubmit() {
        // console.log(user_state);
        //passes the user object. If the user state object has an id, update or create
        user_state.id ? updateUser(user_state) :
            createUser(user_state);
    }
    //HANDLE INPUT  event type ChangeEvent<type HTMLInputElement> ADD HTMLTextArea... & so IF other than <TextArea>
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        //Spread setState to all(...) props to the the form
        //[ ]: target the property that matches 'name' and key 'value'
        setUser_state({ ...user_state, [name]: value })
    }

    return (
        <>
            <Label>HTTP Post request: RegisterUser() </Label>
            <Segment clearing>

                {/* Pass handleSubmit Submit and autocomplete properties to Form component */}
                <Form autoComplete='off' onSubmit={handleSubmit} onChange={handleInputChange}>
                    {/* Give input fields a vaule to store the input */}
                    <Form.Input type='text' placeholder='First Name' value={user_state.firstName} name='firstName' />
                    <Form.Input type='text' placeholder='Last Name' value={user_state.lastName} name='lastName' />
                    <Form.Input type='email' placeholder='Email Adress' value={user_state.email} name='email' />
                    <Form.Input type='text' placeholder='Username' value={user_state.username} name='username' />
                    <Form.Input type='text' placeholder='Password' value={user_state.password} name='password' />
                    <Button loading={loading_state} floated='right' positive type='submit' content='Submit' />
                    <Button floated='right' basic type='button' content='Cancel' value={user_state.firstName} />
                </Form>
            </Segment>
        </>
    )
})