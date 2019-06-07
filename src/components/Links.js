import React from 'react';
import { Nav } from 'react-bootstrap';



function Links(){
  return(
  <div>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    </Nav>
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/cats">Cats</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/golf">Golf</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/space">Space</Nav.Link>
        </Nav.Item>
    </Nav>
  </div>

  );

}

export default Links;
