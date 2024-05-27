import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FormCreateBanco } from "../components/form/FormCreateBanco";
import { FormCreateUsuario } from "../components/form/FormCreateUsuario";
import { FormCreateCiudad } from "../components/form/FormCreateCiudad ";
import { FormCreateEmpresa } from "../components/form/FormCreateEmpresa";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { Comprobante } from "../components/perfilUsuario/Comprobante";
import { CompoCiudades } from "../components/administrador/CompoCiudades";
import { CompoBanco } from "../components/administrador/CompoBanco";
import { CompoEmpleados } from "../components/administrador/CompoEmpleados";
import { CompoEmpresa } from "../components/administrador/CompoEmpresa";
import { DashboardAdmini } from "../components/administrador/DashboardAdmini";
import { useThemeContext } from "../userContext/ContextProvider";
import { PerfilAdmin } from "../components/administrador/PerfilAdmin";
import { PerfilBanco } from "../components/administrador/pagesPerfil/PerfilBanco";

export const AdminPage = () => {
  const { selectedPage, setSelectedPage, setshowPagesProfile } =
    useThemeContext();
  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "Perfil usuario":
        return <PerfilAdmin />;
      case "Visualizar los bancos":
        return <PerfilBanco />;
      case "Visualizar las ciudades":
        return <CompoCiudades />;
      case "Visualizar  empleados":
        return <CompoEmpleados />;
      case "Visualizar  empresas":
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
        <Col md={7} className="d-flex  ">
          <DashboardAdmini />
          {/* <FormCreateBanco />
          <FormCreateUsuario />
          <FormCreateCiudad />
          <FormCreateEmpresa /> */}
        </Col>
        <Col md={7}>{renderSelectedPage()}</Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={6}></Col>
      </Row>
    </div>
  );
};
