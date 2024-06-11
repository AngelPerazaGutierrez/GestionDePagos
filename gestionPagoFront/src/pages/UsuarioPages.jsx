import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useThemeContext } from "../userContext/ContextProvider";
import { FormCreateEgreso } from "../components/form/FormCreateEgreso";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { DashboardUser } from "../components/perfilUsuario/DashboardUser";
import { PerfilUsuario } from "../components/perfilUsuario/PerfilUsuario"
import { useState } from "react";

export const UsuarioPages = () => {
  const { isVisible, selectedPage } = useThemeContext();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "Mi perfil":
        return <PerfilUsuario />;      
      case "Crear comprobante de pago":
        return <FormCreateEgreso />
      case "Visualizar comprobantes de pago":
        return <ComprobanteCard />;
      default:
        return <PerfilUsuario />;
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
          <DashboardUser />
          {isVisible && !isSmallScreen && <DashboardUser />} 
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

