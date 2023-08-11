import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    //Remove props interfact. Get props from the store
    //No longer need store
    return (
        <Menu inverted fixed='top'>
            <Container>
                {/* Menu Item treated as NavLink */}
                < Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/images/adpLogo.png" alt="logo" style={{ marginRight: 10 }} />
                    Home Page
                </Menu.Item>
                < Menu.Item  as={NavLink} to='/appUsers' name=' Users' />
                <Menu.Item>
                    {/* //Renders when clicked */}
                    <Button as={NavLink} to='registerUser'positive content='Register User' />
                </Menu.Item>

            </Container>
        </Menu>
    )
}