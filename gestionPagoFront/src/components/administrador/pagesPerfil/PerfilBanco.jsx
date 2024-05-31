import React, { useState } from "react";
import { FormCreateBanco } from "../../form/FormCreateBanco";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomButton } from "../../common/CustomButton";
import { CompoBanco } from "../CompoBanco";
import { useThemeContext } from "../../../userContext/ContextProvider";

export const PerfilBanco = () => {
  // const [showBancos, setShowBancos] = useState(null);
  const { showForm, setShowForm } = useThemeContext();
  const [showCreateBanco, setShowCreateBanco] = useState(true);
  const [showBancos, setShowBancos] = useState(false);

  const handleShowCreateBanco = () => {
    setShowCreateBanco(true);
    setShowBancos(false);
    setShowForm(true);
  };

  const handleShowBancos = () => {
    setShowCreateBanco(false);
    setShowBancos(true);
  };

  return (
    <div>
      <Row>
        <Row>
          <Col xs={12} md={4} className=" "></Col>
          <Col xs={12} md={3} className="">
            <CustomButton
              text="Visualizar formulario"
              onClick={handleShowCreateBanco}
            />
          </Col>
          <Col xs={12} md={3} className="">
            <CustomButton text="Visualizar Bancos" onClick={handleShowBancos} />
          </Col>
        </Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={10}>
          {showBancos && <CompoBanco />}
          <div className="containerForm ">
            <div className="formulari">
              {showCreateBanco && (
                <div className="formulario shadow rounded">
                  <FormCreateBanco />
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
