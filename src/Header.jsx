import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" className="text">
            Ornek Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
