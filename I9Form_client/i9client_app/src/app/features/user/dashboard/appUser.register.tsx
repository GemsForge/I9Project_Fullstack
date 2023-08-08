import { Button, Form, Label, Segment } from "semantic-ui-react";
import User from "../user.type";
import { ChangeEvent, useState } from "react";

interface Props{
    //make sure state is either User Objet or Undefined
    user_state: User | undefined;
    closeForm_function: () => void;
    createOrEdit_function:(user: User)=> void;
    
}
export default function UserFrom({user_state: selectedUser_state, closeForm_function, createOrEdit_function}: Props) {

    //Set initialstate of the form inputs
    //IF User exist THEN set state to...
    const initialstate = selectedUser_state ?? {
        id:'',
        firstName:'',
        lastName:'',
        email: '',
        username: '',
        password: '',

    }
    //RESET initial state
    const [user_state, setUser_state] = useState(initialstate);

    //HANDLE SUBMIT
    function handleSubmit(){
        // console.log(user_state);
        //passes the user object
        createOrEdit_function(user_state);
    }
    //HANDLE INPUT  event type ChangeEvent<type HTMLInputElement> ADD HTMLTextArea... & so IF other than <TextArea>
    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const{name, value} = e.target;

        //Spread setState to all(...) props to the the form
        //[ ]: target the property that matches 'name' and key 'value'
        setUser_state({...user_state, [name]: value})
       
        
    }
   
    return (
        <>
            <Label>HTTP Post request: RegisterUser() </Label>
            <Segment clearing>

                {/* Pass handleSubmit Submit and autocomplete properties to Form component */}
                <Form autoComplete='off' onSubmit={handleSubmit} onChange={handleInputChange}>
                    {/* Give input fields a vaule to store the input */}
                    <Form.Input type='text' placeholder='First Name' value={user_state.firstName} name='firstName'/>
                    <Form.Input type='text' placeholder='Last Name' value={user_state.lastName}  name='lastName' />
                    <Form.Input type='email' placeholder='Email Adress' value={user_state.email}  name='email'/>
                    <Form.Input type='text' placeholder='Username' value={user_state.username} name='username'/>
                    <Form.Input type='text' placeholder='Password' value={user_state.password}  name='password'/>
                    <Button floated='right' positive  type='submit' content='Submit' />
                    <Button onClick={closeForm_function} floated='right' basic type='button' content='Cancel' value={user_state.firstName}/>
                </Form>
            </Segment>
        </>

    )
}