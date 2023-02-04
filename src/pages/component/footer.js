import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap'
function Footer(props) {
    return (
        <div>
           <Container>
      <Navbar expand="lg" variant="light" bg="" className="justify-content-center">
      <Navbar.Collapse className="justify-content-center fixed-bottom">
          <Nav.Link href='/'>@Developed By P.Sivakumar Bsc-IT</Nav.Link>
       </Navbar.Collapse> 
      </Navbar>
    </Container> 
        </div>
    );
}

export default Footer;