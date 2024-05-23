import React from "react";
// import { PagesDashboard } from "./PagesDashboard";
import { Dashboard } from "../components/common/Dashboard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useThemeContext } from "../userContext/ContextProvider";
ComprobanteCard;
// import { FormComparateIngres } from "../components/form/FormComparateIngres";
import { FormCreateIngreso } from "../components/form/FormCreateIngreso";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { PerfilUser } from "../components/perfilUsuario/PerfilUsuario";
export const UsuarioPages = () => {
  const { selectedPage, showPagesProfile } = useThemeContext();

  return (
    <div className="container-flued  containerPage pt-5">
      <Row>
        <Col sm={4}>
          <Dashboard />
        </Col>
        <Col sm={8} className="pt-5">
          {selectedPage}
          {/* {showPagesProfile && <FormCreateIngreso />} */}
          {selectedPage === "Perfil" && <PerfilUser />}
          {selectedPage === "Crear comprobante de pago" && (
            <FormCreateIngreso />
          )}
          {selectedPage === "Visualizar comprobantes de pago" && (
            <ComprobanteCard />
          )}
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="">
          <div className="form mt-5 ">{/* <ComprobanteCard /> */}</div>
        </Col>
        <Col sm={8} className="">
          <div className="form mt-5 ">{/* <ComprobanteCard /> */}</div>
        </Col>
      </Row>
    </div>
  );
};
