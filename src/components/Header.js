import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  // let { search } = useParams();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      s
      variant="dark"
      // className="bg-body-tertiary"
    >
      <Container>
        <Link to={"/"} className="navbar-brand">
          Dictionary.io
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Thesaurus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Translate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Grammar
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
