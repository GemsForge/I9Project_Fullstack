import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage(){
    return (
    <Container style={{marginTop: '7em'}}>
        <h1> Home Page</h1>
        <h2>
            Go to
             <Link to='/appUsers' > App User Dashboard</Link>
        </h2>
        
    </Container>
    )
}