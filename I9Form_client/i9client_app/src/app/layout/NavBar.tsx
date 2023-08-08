import { Button, Container, Menu } from "semantic-ui-react";

interface Props{
    openForm_function: () => void;
}

export default function NavBar({openForm_function}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                < Menu.Item header>
                    <img src="/assets/images/adpLogo.png" alt="logo" style={{ marginRight: 10 }} />
                    App Users
                </Menu.Item>
                < Menu.Item name='Users' />
                <Menu.Item>
                    {/* //Renders when clicked */}
                    <Button onClick={openForm_function} positive content='Add App User' />
                </Menu.Item>

            </Container>
        </Menu>
    )
}