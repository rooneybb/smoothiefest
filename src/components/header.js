import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const header = () => (
    <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
            <Navbar.Brand>Smoothiefest</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/About">
                    <Nav.Link>Love Story</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Photos">
                    <Nav.Link>Photos</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/WeddingPhotos">
                    <Nav.Link>Wedding Photos</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/HoneymoonPhotos">
                    <Nav.Link>Honeymoon Photos</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/WeddingVideo">
                    <Nav.Link>Wedding Video</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default header;
