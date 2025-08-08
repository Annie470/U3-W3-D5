import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchForm from "./SearchForm"; 

const SideBar = () => {
  return (
    <>
      {/* NAVMOB */}
      <Navbar
        className="bg-dark d-sm-block d-lg-none w-100"
        expand={false}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 2 }}
      >
        <Container fluid className="d-flex flex-row-reverse">
          <Nav.Link className="ms-auto text-danger" href="#">
            Accedi
          </Nav.Link>
          <Navbar.Brand className="mx-auto" href="#home">
            <img
              alt=""
              src="/src/assets/logos/music.svg"
              width="100%"
              className="d-inline-block align-top ms-3"
              style={{ filter: "invert(1)" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="bg-transparent toggle-danger"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="position-relative w-100 mb-3">
              <i
                className="bi bi-search position-absolute text-danger"
                style={{
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                }}
              ></i>
              <SearchForm />
            </div>
            <Nav.Link className="text" href="#home">
              <i className="bi bi-house-door me-2 text-danger"></i>Home
            </Nav.Link>
            <Nav.Link className="text" href="#novita">
              <i className="bi bi-grid me-2 text-danger"></i>Novità
            </Nav.Link>
            <Nav.Link className="text" href="#radio">
              <i className="bi bi-broadcast me-2 text-danger"></i>Radio
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* NAVDESK */}
      <Navbar
        className="bg-dark d-none d-lg-flex flex-column"
        style={{
          height: "100vh",
          width: "260px",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Container fluid className="flex-column align-items-start p-3">
          <Navbar.Brand href="#home" className="mb-4">
            <img
              alt=""
              src="/src/assets/logos/music.svg"
              width="100%"
              style={{ filter: "invert(1)" }}
            />
          </Navbar.Brand>
          <div className="position-relative w-100 mb-3">
            <i
              className="bi bi-search position-absolute text-danger"
              style={{
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
              }}
            ></i>
            <SearchForm />
          </div>
          <Nav className="flex-column w-100">
            <Nav.Link className="text" href="#home">
              <i className="bi bi-house-door me-2 text-danger"></i>Home
            </Nav.Link>
            <Nav.Link className="text" href="#novita">
              <i className="bi bi-grid me-2 text-danger"></i>Novità
            </Nav.Link>
            <Nav.Link className="text" href="#radio">
              <i className="bi bi-broadcast me-2 text-danger"></i>Radio
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SideBar;
