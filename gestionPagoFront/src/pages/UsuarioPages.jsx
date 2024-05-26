import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useThemeContext } from "../userContext/ContextProvider";
import { FormCreateIngreso } from "../components/form/FormCreateIngreso";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { DashboardUser } from "../components/perfilUsuario/DashboardUser";

export const UsuarioPages = () => {
  const { selectedPage, showPagesProfile } = useThemeContext();

  return (
    <div className="container-flued mt-9 containerPage pt-5">
      <Row>
        <Col sm={4} className="">
          <DashboardUser />
        </Col>

        <Col className="pt-5">
          {selectedPage}

          {selectedPage === "Perfil" && <PerfilUser />}
          <div style={{ width: "50%" }}>
            {selectedPage === "Crear comprobante de pago" && (
              <FormCreateIngreso />
            )}
          </div>
          {selectedPage === "Visualizar comprobantes de pago" && (
            <ComprobanteCard />
          )}
        </Col>
      </Row>
    </div>
  );
};
