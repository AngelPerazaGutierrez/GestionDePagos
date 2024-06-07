import React from "react";
// import { PagesDashboard } from "./PagesDashboard";
// import { Dashboard } from "../components/common/Dashboard";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/profileUSer/pagesProfile.css";
import img from "../assets/img/perfil.jpeg";
import { useThemeContext } from "../userContext/ContextProvider";
// import { FormComparateIngres } from "../components/form/FormComparateIngres";
import { FormCreateEgreso } from "../components/form/FormCreateEgreso";
export const LoginPage = () => {
  const { isAuthenticated, logout } = useThemeContext();

  return (
    <div className="container-flued  containerPage pt-5">
      {/* <Container> */}
      <Row>
        <Col sm={4}>{/* <Dashboard /> */}</Col>
        <Col sm={4} className="">          
          <div className="form mt-5 ">
            <FormCreateEgreso />
          </div>
        </Col>
      </Row>
      <Row></Row>
      {/* </Container> */}
    </div>
  );
};
