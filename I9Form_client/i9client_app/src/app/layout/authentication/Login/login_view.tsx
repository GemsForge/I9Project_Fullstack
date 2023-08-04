import { Image, Grid, } from "semantic-ui-react";
import LoginForm from "./login_form";

export default function LoginView(){
    return(
        <div>
            <Grid>
                <Grid.Column width='9'>
                 <Image src="/assets/images/authView_img.svg" alt="AutView ADP Image" size='large'/>
                </Grid.Column>
                <Grid.Column width='5'>
                    <LoginForm/>
                </Grid.Column>
            </Grid>
            
        </div>
    )
}