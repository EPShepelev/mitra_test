import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import myAvatar from '../static/my_avatar.jpg'
import Avatar from '../components/Avatar'

const Navigation = () => {
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <Avatar avatar={myAvatar} />
                      <p>Шепелев Евгений</p>
                      <p>shepelev.ep@yandex.ru</p>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Link to='/'>Список постов</Link>
                      <Link to='/about'>Обо мне</Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}

export default Navigation
