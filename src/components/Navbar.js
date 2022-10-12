import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// Image imports
import logoFitOne from "../img/FitOneLogo.png";

import "../App.css";

function NavBar() {
  return (
      <Navbar className='navBarTop'>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoFitOne}
              className="d-inline-block align-top imagelogo"
            />{' '}
            FitOne - Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavBar;