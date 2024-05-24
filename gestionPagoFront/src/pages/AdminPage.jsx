import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FormCreateBanco } from "../components/form/FormCreateBanco";
import { FormCreateUsuario } from "../components/form/FormCreateUsuario";
import { FormCreateCiudad } from "../components/form/FormCreateCiudad ";
import { FormCreateEmpresa } from "../components/form/FormCreateEmpresa";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { Comprobante } from "../components/perfilUsuario/Comprobante";

export const AdminPage = () => {
  return (
    <div
      className="justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Container>
        <Row
          className="justify-content-center border align-items-center"
          style={{ height: "100vh" }}
        >
          <Col md={4}></Col>
          <Col md={2}>
            <FormCreateBanco />
          </Col>
          <Col md={2}>
            <FormCreateUsuario />
          </Col>
          <Col md={2}>
            <FormCreateCiudad />
          </Col>
          <Col md={2}>
            <FormCreateEmpresa />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
