
import { Button, Grid, Header, Segment } from "semantic-ui-react";

export default function ApplicantDashboard() {
    return (
        <Segment.Group>
            <Segment.Group horizontal>
                <Segment>
                    <Header as="h2" content="I-9 Forms" />

                </Segment>
                <Segment textAlign="right">
                    <Header as="h3" content="0/2" subheader="Completed" color="red" />
                </Segment>
            </Segment.Group>
            <Segment.Group>
                
                    <Grid relaxed="very" padded>
                        <Grid.Column width="3"> Start Date
                            <Grid.Row> 01/15/2023</Grid.Row>
                            <Grid.Row> 01/15/2023</Grid.Row>
                        </Grid.Column>
                        <Grid.Column width="4"> Activity
                            <Grid.Row>Form I9: Section 1</Grid.Row>
                            <Grid.Row> Form I9: Documents</Grid.Row>
                        </Grid.Column>
                        <Grid.Column  width="4"> Status
                            <Grid.Row> Not Complete </Grid.Row>
                            <Grid.Row> Not Complete</Grid.Row>
                        </Grid.Column>
                        <Grid.Column  width="3"> Due Date
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
            </Segment.Group>
        </Segment.Group>

    )
}