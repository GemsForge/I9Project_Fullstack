import React from 'react';
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar(){
    return(
        <Menu inverted fixed='top'>
            <Container>
               < Menu.Item header>
                <img src="/assets/adpLogo.png" alt="logo" style={{marginRight: 10}}/>
                App Users
               </Menu.Item>
               < Menu.Item name='Users'/>
              <Menu.Item>
                <Button positive content='Add Applicant'/>
               </Menu.Item>
            
            </Container>
        </Menu>
    )
}