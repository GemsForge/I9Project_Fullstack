import { Card, Image, Segment, SegmentGroup } from "semantic-ui-react";

export default function ApplicantProfile(){
    return (
      <SegmentGroup>
        <Segment>
            <Card>
                <Image src="/assets/images/avatar.svg" size="medium"/>
                <Card.Content> user.fullName  
                <Card.Meta> 
                    <span >Applicant</span></Card.Meta>
                </Card.Content>
                <Segment>
                    <Card.Description>
                        Form I-9: form.id
                    </Card.Description>
                </Segment>
            </Card>
        </Segment>
        </SegmentGroup>
    )
}