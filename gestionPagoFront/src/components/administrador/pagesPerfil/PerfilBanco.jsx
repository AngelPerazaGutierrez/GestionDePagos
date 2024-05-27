import React from "react";
import { FormCreateBanco } from "../../form/FormCreateBanco";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomButton } from "../../common/CustomButton";
export const PerfilBanco = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <FormCreateBanco />
        </Col>
        <Col xs={!2} md={6}>
          <p>Visualizar Bancos</p>
          <CustomButton text="Visualizar bancos" />
        </Col>
      </Row>
    </div>
  );
};
