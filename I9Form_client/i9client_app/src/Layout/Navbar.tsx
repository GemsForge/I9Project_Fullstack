import { Button, Container, Menu } from "semantic-ui-react";

export default function NavigationBar() {
    return (
        <Menu inverted fixed='top' className="Navbar">
      <Container>
            {/* <img src={logo} alt="adplogo" id="logo" /> */}
           <Menu.Item header>
            <img src='' alt='logo'/>
            Welcome, <a href="#login">James Oneal</a>
            </Menu.Item>
            <Menu.Item name='AppUsers'/>
            <Menu.Item>
                <Button positive content='Register User'/>
            </Menu.Item>
     </Container>
    </Menu>
      );
  }