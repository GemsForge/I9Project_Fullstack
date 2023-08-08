import { Form, Header, Segment, Select} from "semantic-ui-react";
const attestationOptions = [
    {
        value: undefined, label: 'None'
    },
    {
        value: "US_Citizen",
        label: " 1. A citizen of the United States",
    },
    {
        value: "Noncitizen",
        label: "2. A noncitizen national of the United States (See instructions)",
    },
    {
        value: "Permanent_Resident",
        label: " 3. A lawful permanent resident",
    },

    {
        value: "Authorized_Alien",
        label: "  4. An Alien authorized to work"
    },

];
export default function AttestationInfo() {
    return (
        <>
            <Header as="h2" dividing> Employee Attestation
                <Header.Subheader>
                    I am aware that federal law provides for imprisonment and/or fines for
                    false statements or use of false documents in connection with the
                    completion of this form.
                    <br /> I attest, under penalty of perjury, that I am (check one of the
                    following boxes):
                </Header.Subheader>
            </Header>

            <Segment>
                <Form>
                    <Form.Select placeholder='Employee Attestation Selection'  options={attestationOptions} />
                    <p>If you selected (3) provide the following.</p>
                    <Form.Input fluid label='USCIS Number' placeholder='USCIS Number'/>
                    <Segment>
                    <p>
            If you are an alien authorized to work, provided the following.{" "}
            <br />
            <em>
              Some aliens may write "N/A" in the expiration date field. (See
              instructions)
            </em>
          </p>
                    </Segment>
                </Form>
                

            </Segment>
        </>
    )
}