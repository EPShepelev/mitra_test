import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import myAvatar from '../static/my_avatar.jpg'
import Avatar from '../components/Avatar'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <Navbar expand={false} className="mb-2">
      <Container fluid>
        <Navbar.Toggle /> 
          <Navbar.Offcanvas placement="start">
            <Offcanvas.Header className="align-items-start" closeButton>
              <Offcanvas.Title className="d-flex gap-2 align-items-center justify-content-center">
                <Avatar avatar={myAvatar} />
                  <div>
                    <p className="d-flex mb-0">Шепелев Евгений</p>
                    <p className="d-flex mb-0">shepelev.ep@yandex.ru</p>
                  </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                  <LinkContainer to="/mitra_test">
                    <Nav.Link>Список постов</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to='/mitra_test/about'>
                    <Nav.Link>Обо мне</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
               </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation
