import { Grid, Header, Segment } from "semantic-ui-react";
import ApplicantProfile from "./applicant.profile";
// import ApplicantDashboard from "./applicant.dashboard";
import Section1Title from "../form/section1/Form.Layout/Section1_tittle";
import PreparerSignatureInfo from "../form/section1/Form.Layout/PreparerSignatureInfo";

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
            {/* <ApplicantDashboard/> */}
            {/* <Section1Title/> */}
            <PreparerSignatureInfo/>
            </Segment>
            
           </Grid.Column>
        </Grid>
    </>
    )
}