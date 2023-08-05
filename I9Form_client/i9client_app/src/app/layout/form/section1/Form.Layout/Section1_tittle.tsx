import { Header } from "semantic-ui-react";


export default function Section1Title(){
    return(
        <>
        <Header as="h2" dividing>  Section 1. Employee Information and Attestation
        <Header.Subheader >
        (Employees must complete and sign Section 1 of Form I-9
        <strong> no later than the first day of employment, </strong> but not
        before accepting a job offer.)

         </Header.Subheader>
         </Header>
         <p>
            <span >
            START HERE: Read instructions carefully before completing this form.
          The instructions must be available, either in paper or electronically,
          during completion of this form. Employers are liable for errors in the
          completion of this form.{" "}
            </span>
         </p>
         <p>
            <strong>
            It is illegal to discriminate against work-authorized
        individuals. Employers CANNOT specify which document(s) an employee may
        present to establish employment authorization and identity. The refusal
        to hire or continue to employ an individual because the documentation
        presented has a future expiration date may also constitute illegal
        discrimination.{" "}
            </strong>
         </p>
         </>
    )
}