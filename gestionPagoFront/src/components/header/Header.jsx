import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../assets/css/header/headerCss.css";
import { BsHeadset } from "react-icons/bs";
import img1 from "../../assets/img/perfil.jpeg";
import { AuthButton } from "./AuthButton";
import { useThemeContext } from "../../userContext/ContextProvider";

export const Header = () => {
  const { isAuthenticated, logout } = useThemeContext();
  const handleLogin = () => {
    login();
    alert("El usuario");
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="d-flex justify-content-end  position-fixed top-0 header-content"
      >
        <div className="d-flex mx-5">
          <BsHeadset className="fs-1 fw-bold" />
          <h3 className="fw-bold">Soporte</h3>
        </div>

        <Container fluid>
          <Navbar.Brand href="#">
            <NavLink to="/home" className="nombre fs-2 px-5 fw-bold"></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex gap-3  container"
              navbarScroll
            >
              {/* <Nav.Link href="#action1"></Nav.Link>
            {/* <NavLink to="/" className="nav-link"> */}
              {/* Inicio */}
              {/* </NavLink> 
            <NavLink to="/pagesProducts" className="nav-link">
              Nueva colección
            </NavLink>
            <NavLink to="/pagesWomen" className="nav-link">
              Mujer
            </NavLink>
            <NavLink to="/pagesMan" className="nav-link">
              Para él
            </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className=" ">
          <AuthButton />
        </div>
      </Navbar>
    </>
  );
};
