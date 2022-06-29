import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

function OffcanvasExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" className="py-0">
        <Container fluid>
          <Navbar.Brand href="">
            <img
              alt="logo"
              src="https://s.tmimgcdn.com/scr/800x500/78300/cat-logo-template_78332-2-original.jpg"
              className=""
              width="120"
              height="120"
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
                <Nav.Link className="nav-item" href="/">
                  <Link
                    activeClass="active"
                    to="test1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => {
                      console.log("clciekd");
                    }}
                  >
                    Test 1
                  </Link>
                </Nav.Link>
                <Nav.Link className="nav-item" href="/Route1">
                  Route1
                </Nav.Link>
                <Nav.Link className="nav-item" href="/Route2">
                  Route2
                </Nav.Link>
              </Nav>

              {/* search component */}
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
