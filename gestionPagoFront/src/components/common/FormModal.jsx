import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormCreateIngreso } from "../form/FormCreateIngreso";
import { FormCreateCiudad } from "../form/FormCreateCiudad ";
import { FormCreateBanco } from "../form/FormCreateBanco";
import { FormCreateEmpresa } from "../form/FormCreateEmpresa";
import { FormCreateUsuario } from "../form/FormCreateUsuario";
export const FormModal = ({
  isOpen,
  onClose,
  initialValues,
  onSave,
  formType,
  bancoId,
}) => {
  const renderForm = () => {
    switch (formType) {
      case "crearIngreso":
        return (
          <FormCreateIngreso initialValues={initialValues} onSave={onSave} />
        );
      case "crearCiudad":
        return (
          <FormCreateCiudad initialValues={initialValues} onSave={onSave} />
        );
      case "crearBancos":
        return (
          <FormCreateBanco
            initialValues={initialValues}
            onSave={onSave}
            bancoId={bancoId}
          />
        );
      case "crearEmpresa":
        return (
          <FormCreateEmpresa initialValues={initialValues} onSave={onSave} />
        );
      case "crearUsuario":
        return (
          <FormCreateUsuario initialValues={initialValues} onSave={onSave} />
        );

      default:
        return null;
    }
  };
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {/* {formType === "crearIngreso" && "Crear Ingreso"}
          {formType === "crearCiudad" && "Crear Ciudad"}
          {formType === "crearBancos" && "Crear Banco"}
          {formType === "crearEmpresa" && "Crear Empresa"}
          {formType === "crearUsuario" && "Crear Usuario"} */}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>{renderForm()}</Modal.Body>

      <Modal.Footer>
        {/* <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};
