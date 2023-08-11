import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";


export default function NavBar() {
    //Remove props interfact. Get props from the store
    const {appUserStore} = useStore();
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
                    <Button onClick={() => appUserStore.openForm()} positive content='Add App User' />
                </Menu.Item>

            </Container>
        </Menu>
    )
}