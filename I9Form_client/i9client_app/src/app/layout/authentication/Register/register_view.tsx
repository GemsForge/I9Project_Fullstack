import {  Image, Grid,  } from "semantic-ui-react";
import RegisterForm from "./register_form";


export default function RegisterView() {

    return (
       
            <Grid>
                <Grid.Column width='9'>
                 <Image src="/assets/images/authView_img.svg" alt="AutView ADP Image" size='large'/>
                </Grid.Column>
                <Grid.Column width='5'>
                    <RegisterForm/>
                </Grid.Column>
            </Grid>
        
    )
}