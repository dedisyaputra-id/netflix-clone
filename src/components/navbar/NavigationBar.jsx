import { Navbar, Row, Col, Nav } from "react-bootstrap";
import "./navbar.css";
const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navigation-bar">
        <Navbar.Brand href="#home" className="logo">
          NETFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex">
          <Nav className="ms-auto align-items-center">
            <Nav.Link className="tagline">
              ACARA TV & FILM TAK TERBATAS
            </Nav.Link>
            <Nav.Link href="#home">
              <button className="btn btn-secondary btn-join">
                GABUNG SEKARANG JUGA
              </button>
            </Nav.Link>
            <Nav.Link href="#link" className="login">
              <div className="btn-login">MASUK</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
