import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const EditarEmpresa = ({ show, handleClose, empresa, onSave }) => {
  const [formData, setFormData] = useState({ ...empresa });

  useEffect(() => {
    setFormData({ ...empresa });
  }, [empresa]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formData);
      Swal.fire({
        title: '¡Guardado!',
        text: 'La empresa ha sido actualizada correctamente.',
        icon: 'success',
      });
      handleClose();
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al intentar actualizar la empresa.',
        icon: 'error',
      });
      console.error('Error al intentar actualizar la empresa:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Empresa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          {/* Añadir más campos según sea necesario */}
          <Button variant="primary" type="submit">
            Guardar cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
