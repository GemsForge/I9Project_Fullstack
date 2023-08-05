import { Grid, Header, Segment } from "semantic-ui-react";
import ApplicantProfile from "./applicant.profile";
import ApplicantDashboard from "./applicant.dashboard";

export default function ApplicantView(){
    return(
        <>
       <Header content='Welcome Back, {user.name} '/>

  
        <Grid>
           < Grid.Column width='4'>
            <Segment>
           <ApplicantProfile/>
           </Segment>
           </Grid.Column>
           < Grid.Column width='12'>
            <Segment>
            <ApplicantDashboard/>
            </Segment>
           
           </Grid.Column>
        </Grid>
    </>
    )
}