
import { Button, Container, Header, Segment, Table } from "semantic-ui-react";

export default function ApplicantDashboard() {
    return (
        <Container>
            <Segment.Group horizontal >
                <Segment basic>
                    <Header as="h2" content="I-9 Forms" textAlign="center" icon="file alternate"/>
                </Segment>
                <Segment basic textAlign="right">
                    <Header as="h3" content="0/2" subheader="Completed" color="red" />
                </Segment >
            </Segment.Group>
            <Table basic="very"  >
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell colSpan='3' content="Start Date" />
                        <Table.HeaderCell colSpan='3' content="Activity" />
                        <Table.HeaderCell colSpan='3' content="Status" />
                        <Table.HeaderCell colSpan='3' content="Due Date" />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row textAlign="center">
                        <Table.Cell colSpan='3'>  01/15/2023 </Table.Cell>
                        <Table.Cell colSpan='3'>Form I9: Section 1</Table.Cell>
                        <Table.Cell colSpan='3'> Not Complete</Table.Cell>
                        <Table.Cell colSpan='3'> 01/17/2023 </Table.Cell>
                        <Table.Cell colSpan='3'> <Button secondary compact> Start</Button></Table.Cell>


                    </Table.Row>
                    <Table.Row textAlign="center">
                        <Table.Cell colSpan='3'>  01/15/2023</Table.Cell>
                        <Table.Cell colSpan='3'> Form I9: Documents</Table.Cell>
                        <Table.Cell colSpan='3'> Not Complete</Table.Cell>
                        <Table.Cell colSpan='3'> 01/17/2023 </Table.Cell>
                        <Table.Cell colSpan='3'> <Button secondary compact> Start</Button></Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>

            {/* <Segment.Group>
                <Grid relaxed="very" padded>
                    <Grid.Column width="3"> Start Date
                        <Grid.Row> 01/15/2023</Grid.Row>
                        <Grid.Row> 01/15/2023</Grid.Row>
                    </Grid.Column>
                    <Grid.Column width="4"> Activity
                        <Grid.Row>Form I9: Section 1</Grid.Row>
                        <Grid.Row> Form I9: Documents</Grid.Row>
                    </Grid.Column>
                    <Grid.Column width="4"> Status
                        <Grid.Row> Not Complete </Grid.Row>
                        <Grid.Row> Not Complete</Grid.Row>
                    </Grid.Column>
                    <Grid.Column width="3"> Due Date
                        <Grid.Row>01/17/2023 </Grid.Row>
                        <Grid.Row>  01/17/2023</Grid.Row>
                    </Grid.Column>
                    <Grid.Column width="2">
                        <Grid.Row>
                            <Button secondary compact> Start</Button>
                            <Button secondary compact > Start</Button>
                        </Grid.Row>
                    </Grid.Column>


                </Grid>
            </Segment.Group> */}
        </Container>

    )
}