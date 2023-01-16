import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap'
function Footer(props) {
    return (
        <div>
           <Container>
      <Navbar expand="lg" variant="light" bg="light">
       
      <Navbar.Collapse className="justify-content-center fixed-bottom">
          <Nav.Link href='/'>@SKC Web Team</Nav.Link>
       </Navbar.Collapse> 
      </Navbar>
    </Container> 
        </div>
    );
}

export default Footer;