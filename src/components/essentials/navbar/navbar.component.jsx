import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import earthid_logo from '../../../assest/Home/earth-id_logo.png';
import './navbar.styles.scss';

export const NavBar = () => (
  <div className='navbar-main'>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
      <Navbar.Brand href='#home'>
        <img src={earthid_logo} alt='logo' className='brand-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <NavDropdown title='About' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/about/latest-news'>Latest News</NavDropdown.Item>
            <NavDropdown.Item href='/about/partners'>Partners</NavDropdown.Item>
            <NavDropdown.Item href='/about/company'>Company</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Solutions' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/solution/products'>Products</NavDropdown.Item>
            <NavDropdown.Item href='/solution/use-case'>Use Cases</NavDropdown.Item>
            <NavDropdown.Item href='/solution/industries'>Industries</NavDropdown.Item>
            <NavDropdown.Item href='/solution/compliance'>Compliance</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Technology' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/technology/zero-knowledge-proof'>Zero Proofs</NavDropdown.Item>
            <NavDropdown.Item href='/technology/liveness-detection'>
              Liveness Detection
            </NavDropdown.Item>
            <NavDropdown.Item href='/technology/distributed-ledger'>
              Distributed Ledger
            </NavDropdown.Item>
            <NavDropdown.Item href='/technology/face-based'>Face Based</NavDropdown.Item>
            <NavDropdown.Item href='/technology/palm-based'>Palm Based</NavDropdown.Item>
            <NavDropdown.Item href='/technology/ocr'>OCR</NavDropdown.Item>
            <NavDropdown.Item href='/technology/ai-ml'>AI & ML</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Resources' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/resources/blogs'>Blogs</NavDropdown.Item>
            <NavDropdown.Item href='/resources/tco'>TCO</NavDropdown.Item>
            <NavDropdown.Item href='/resources/webinars'>Webinars</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
