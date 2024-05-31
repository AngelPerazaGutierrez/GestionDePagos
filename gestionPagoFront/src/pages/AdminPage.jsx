import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FormCreateBanco } from "../components/form/FormCreateBanco";
import { FormCreateUsuario } from "../components/form/FormCreateUsuario";
import { FormCreateEmpresa } from "../components/form/FormCreateEmpresa";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { Comprobante } from "../components/perfilUsuario/Comprobante";
import { CompoBanco } from "../components/administrador/CompoBanco";
import { CompoEmpleados } from "../components/administrador/CompoEmpleados";
import { CompoEmpresa } from "../components/administrador/CompoEmpresa";
import { DashboardAdmini } from "../components/administrador/DashboardAdmini";
import { useThemeContext } from "../userContext/ContextProvider";
import { PerfilAdmin } from "../components/administrador/PerfilAdmin";
import { PerfilBanco } from "../components/administrador/pagesPerfil/PerfilBanco";

export const AdminPage = () => {
  const { isVisible, selectedPage } = useThemeContext();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "Mi perfil":
        return <PerfilAdmin />;
      case "Bancos":
        return <PerfilBanco />;      
      case "Usuarios":
        return <CompoEmpleados />;
      case "Empresas":
        return <CompoEmpresa />;
      default:
        return <PerfilAdmin />;
    }
  };
  return (
    <div
      className="justify-content-center "
      style={{ height: "100vh", marginTop: "100px" }}
    >
      {/* <Container> */}
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={12} className="d-flex  ">
          <DashboardAdmini />
          {isVisible && !isSmallScreen && <DashboardAdmini />}                            
          {/* {isVisible &&()} */}
          {/* <FormCreateBanco />
          <FormCreateUsuario />
          <FormCreateCiudad />
          <FormCreateEmpresa /> */}
        </Col>
        <Col md={12}>
          <div className="container">{renderSelectedPage()}</div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={6}></Col>
      </Row>
    </div>
  );
};
