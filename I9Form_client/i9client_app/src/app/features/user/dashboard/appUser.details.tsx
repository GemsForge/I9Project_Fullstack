import { Button, Card, Header, Image, List, Segment, SegmentGroup } from "semantic-ui-react";
import User from "../user.type";


interface Props {
    user_state: User
    cancelSelectUser_function: () => void;
    openForm_function:(id:string) => void;
    

}

export default function AppUserDetails({ user_state, cancelSelectUser_function, openForm_function}: Props) {
    return (
       
            <Card>
            {/* TODO: add profile picture blob property to app user entity */}
            {/* <Image src={`/assets/images/${user.profile_image}`}/> */}
           <Image size="small" src={'/assets/images/avatar.svg'} />
            
            <Card.Content>
            
                <Card.Header content={`${user_state.firstName} ${user_state.lastName}`} />
                    <Card.Meta content={user_state.id}></Card.Meta>
                    <Card.Description>
                    <List.Item>{<strong>User Email:</strong>} User Email: {user_state.email}</List.Item>
                    <List.Item> {<strong>User Username:</strong>} {user_state.username}</List.Item>
                    <List.Item> {<strong>User Password:</strong>} {user_state.password}</List.Item>
                </Card.Description>
                
            </Card.Content>
            
           
            <Card.Content extra>
                <Button.Group width='2'>
                    <Button onClick={()=> openForm_function(user_state.id)} basic secondary content='Edit' />
                    <Button onClick={cancelSelectUser_function} basic negative content='Cancel' />
                </Button.Group>
            </Card.Content>
            </Card>
           
            
        
    )
}