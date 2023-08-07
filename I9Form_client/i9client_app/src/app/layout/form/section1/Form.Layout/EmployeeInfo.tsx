import { Form, Grid, Header, Segment } from "semantic-ui-react";
import ApplicantProfile from "../../../applicant/applicant.profile";

export default function EmployeeInfo() {
    return (
        <>
            <Header as="h2" dividing> Employee Information
            </Header>

            <Segment>
                <Form>
                    <Form.Input fluid label='First name' placeholder='First name' width={6} />
                    <Form.Input fluid label='Last name' placeholder='Last name' width={6} />
                    <Form.Input fluid label='Middle name' placeholder='Middle Address' width={6} />
                    <Form.Input fluid label='Other names' placeholder='Other name' width={6} />
                    <Form.Input fluid label='Home Address' placeholder='Home Address' width={6} />
                    <Form.Input fluid label='Aptment Number' placeholder='Aptment Number' width={6} />
                    <Form.Input fluid label='City' placeholder='City' width={6} />
                    <Form.Input fluid label='State' placeholder='State' width={6} />
                    <Form.Input fluid label='Date of Birth' placeholder='DOB' width={6} />
                    <Form.Input fluid label='SSN' placeholder='SSN' width={6} />
                    <Form.Input fluid label='Email' placeholder='Email' width={6} />
                    <Form.Input fluid label='Phone' placeholder='Phone' width={6} />
                </Form>
            </Segment>


        </>
    )
}