import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navscroll() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='justify-content'>
          <Navbar.Brand href="/">Resume Craft</Navbar.Brand>
          <Nav>
            <Nav.Link href="/allResumes">Resumes</Nav.Link>
            <Nav.Link href="/createResume">Create Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navscroll;