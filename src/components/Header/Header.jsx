import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Job Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stats">Statistics</Nav.Link>
            <Nav.Link href="/apply">Applied Jobs </Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Button className="btn btn-primary">Start Applying</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
