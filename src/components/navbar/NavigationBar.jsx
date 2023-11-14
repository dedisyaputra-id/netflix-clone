import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
const NavigationBar = () => {
  const onclickHandler = () => {};
  return (
    <div>
      <Navbar className="navigation-bar" fixed="top">
        <Navbar.Brand href="#home" onClick={onclickHandler} className="logo">
          <span className="n">N</span>
          <span className="e">E</span>
          <span className="t">T</span>
          <span className="f">F</span>
          <span className="l">L</span>
          <span className="i">I</span>
          <span className="x">X</span>
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
