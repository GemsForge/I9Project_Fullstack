import { Grid, Label } from "semantic-ui-react";
import User from "../user.type";
import AppUserList from "./appUser.getAll";
import UserForm from "./appUser.register";
import TestBanner from "../../../../test/TestBanner";
import AppUserDetails from "./appUser.details";




interface Props {
    users_state: User[];
    selectedUser_state: User | undefined;
    //passing function as prop  => return type void
    selectUser_function: (id: string) => void;
    cancelSelectUser_function: () => void;
    editMode_state: boolean;
    openForm_function: (id: string) => void;
    closeForm_function: () => void;
    createOrEditUser_function: (user: User) => void;
    deleteUser_function: (id: string) =>void;

}

//add props to the function dashboard
export default function AppUserDashboard({
    users_state, selectedUser_state,
    selectUser_function, cancelSelectUser_function,
    editMode_state, 
    openForm_function,closeForm_function,
    createOrEditUser_function,
    deleteUser_function

}: Props) {

    return (
        <>
            <TestBanner />
            <Label content='HTTP Get request: GetUsers()' />
            <Grid>

                < Grid.Column width='10'>
                    <AppUserList 
                    users_state={users_state} 
                    selectUser_function={selectUser_function}
                    deleteUser_function={deleteUser_function} />
                </Grid.Column>
                <Grid.Column width='5'>
                    {/* Looping the Appuser Details list with the 2 conditions.
                    1. if User at index 0
                    2. Attempts to provide User Details to UI if condition 1 exists */}
                    {/* {state_users[0] &&
                        <AppUserDetails user={state_users[0]} />} */}

                    {/* IF selectedUser exists AND The component is NOT already in editmode THEN.... */}
                    {selectedUser_state && !editMode_state &&
                        <AppUserDetails 
                        user_state={selectedUser_state} 
                        cancelSelectUser_function={cancelSelectUser_function} 
                        openForm_function={openForm_function}
                        />}
                     {editMode_state && 
                     <UserForm user_state={selectedUser_state}  
                     closeForm_function={closeForm_function}
                     createOrEdit_function={createOrEditUser_function}
                     />}   
                   
                    {/* <GetUserComponent /> */}
                </Grid.Column>
            </Grid>
        </>
    )
}