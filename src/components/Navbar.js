import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Image,
} from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

function OffcanvasExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" className="py-0 shadow-lg">
        <Container fluid>
          <Navbar.Brand href="">
            <Image
              alt="logo"
              src="https://github.com/wyu6609/barbershop_startup/blob/main/src/components/images/catlogo1.png?raw=true"
              className=""
              width="120"
              height="120"
              style={{ borderRadius: "30%" }}
              className="my-3"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Link
                  activeClass="active"
                  to="testimonials"
                  smooth={true}
                  duration={250}
                >
                  <Nav.Link className="nav-item" href="/">
                    Testimonials
                  </Nav.Link>
                </Link>
                <Link
                  activeClass="active"
                  to="route3"
                  smooth={true}
                  duration={250}
                >
                  <Nav.Link className="nav-item" href="/Route1">
                    More Info
                  </Nav.Link>
                </Link>

                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <Nav.Link className="nav-item" href="/Route2">
                    About
                  </Nav.Link>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
