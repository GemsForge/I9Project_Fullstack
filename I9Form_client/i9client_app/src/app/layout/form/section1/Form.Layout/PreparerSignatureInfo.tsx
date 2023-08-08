import { Dropdown, Form, Grid, Header } from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';

const preparerCertOptions = [

    {
        value: "NoPreparer",
        label: "I did not use a preparer or translator",
    },
    {
        value: "preparerCert",
        label:
            "A preparer(s) and/or translator(s) assisted the employee in completing Section 1",
    },

];
export default function PreparerSignatureInfo() {

    return (
        <>
            <Header as="h3" dividing>  Preparer and/or Translator Certification
                <Header.Subheader >
                    Fields below must be completed and signed when preparers and/or
                    translators assist an employee in completing Section 1. (Select one)
                </Header.Subheader>
            </Header>

            <Grid container >
                <Grid.Column
                    width="3">
                    <Dropdown
                        fluid
                        selection
                        placeholder="Select one"
                        options={preparerCertOptions} />
                </Grid.Column>
            </Grid>
            <p>
            <strong >
            I attest, under penalty of perjury, that I have assisted in the
            completion of Section 1 of this form and that to the best of my
            knowledge the information is true and correct.
            </strong>
         </p>

         <Form>
            <Form.Group>
                <Form.Input fluid label='Last name' placeholder='Last name' width={6}/>
                <Form.Input fluid label='First name' placeholder='First name'width={6}/>
                <Form.Input fluid label='Home Address' placeholder='Home Address'width={8}/>
                <Form.Input fluid label='City' placeholder='City'width={6}/>
                <Form.Input fluid label='State' placeholder='State' width={6}/>
                <Form.Input fluid label='Zip Code' placeholder='Zip Code' width={6}/>
                <SemanticDatepicker  locale='en-US' datePickerOnly />
                <Form.Input fluid label='Preparer Signature' placeholder='Preparer Signature' width={6}/>

            </Form.Group>
         </Form>


        </>
    )
}