import React, { useState } from "react";
import { FormCreateBanco } from "../../form/FormCreateBanco";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomButton } from "../../common/CustomButton";
import { CompoBanco } from "../CompoBanco";
export const PerfilBanco = () => {
  const [showBancos, setShowBancos] = useState(null);
  const handleShowBancos = () => {
    setShowBancos(!showBancos);
    alert("jrrnfjer");
  };
  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <FormCreateBanco />
        </Col>
        <Col xs={!2} md={6}>
          <p>Visualizar Bancos</p>
          <CustomButton text="Visualizar bancos" onClick={handleShowBancos} />
          {showBancos && <CompoBanco />}
        </Col>
      </Row>
    </div>
  );
};
