import { useEffect, useState } from "react";
import "./css/compoBancos.css";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";
import { CustomButton } from "../common/CustomButton";
import { consultarUsuario } from "../../services/RegistroUsuario";
import { Loading } from "../common/Loading";
import { Bancos } from "./common/Bancos";
import { Empleados } from "./common/Empleados";
import { Password } from "@mui/icons-material";
import { useThemeContext } from "../../userContext/ContextProvider";
import { FormCreateUsuario } from "../form/FormCreateUsuario";

export const CompoEmpleados = () => {

  const { showForm, setShowForm } = useThemeContext();
  const [showCreateUsuario, setShowCreateUsuario] = useState(true);
  const [showUsuario, setShowUsuario] = useState(false);

  const handleShowCreateUsuario = () => {
    setShowCreateUsuario(true);
    setShowUsuario(false);
    setShowForm(false);
  };

  const handleShowUsuario = () => {
    setShowCreateUsuario(false);
    setShowUsuario(true);
  };

  return (
    <div>
      <Row>
        <Row>
          <Col xs={12} md={4} className=" "></Col>
          <Col xs={12} md={3} className="">
            <CustomButton
              text="Visualizar formulario"
              onClick={handleShowCreateUsuario}
            />
          </Col>
          <Col xs={12} md={3} className="">
            <CustomButton text="Visualizar Usuarios" onClick={handleShowUsuario} />
          </Col>
        </Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={10}>
          {showUsuario && <CompoEmpleados />}
          <div className="containerForm ">
            <div className="formulari">
              {showCreateUsuario && (
                <div className="formulario shadow rounded">
                  <FormCreateUsuario />
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
