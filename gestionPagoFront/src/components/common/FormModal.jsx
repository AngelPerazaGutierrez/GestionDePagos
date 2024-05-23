import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormCreateIngreso } from "../form/FormCreateIngreso";

const FormModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Aquí puedes agregar la lógica para guardar los cambios del formulario
    handleCloseModal();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Abrir Modal
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormCreateIngreso onSave={handleSaveChanges} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
