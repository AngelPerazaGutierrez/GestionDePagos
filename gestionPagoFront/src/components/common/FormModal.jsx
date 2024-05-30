import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormCreateIngreso } from "../form/FormCreateIngreso";
import { FormCreateCiudad } from "../form/FormCreateCiudad ";
import { FormCreateBanco } from "../form/FormCreateBanco";
import { FormCreateEmpresa } from "../form/FormCreateEmpresa";
import { FormCreateUsuario } from "../form/FormCreateUsuario";

export const FormModal = ({ isOpen, onClose, formType, defaultValues, onSave, bancoId }) => {
  useEffect(() => {
      if (isOpen) {
          console.log("Banco ID:", bancoId); // Verifica si el bancoId se recibe correctamente
      }
  }, [isOpen, bancoId]);

  if (!isOpen) return null;  

  
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
          <FormCreateBanco initialValues={initialValues} onSave={onSave} />
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
