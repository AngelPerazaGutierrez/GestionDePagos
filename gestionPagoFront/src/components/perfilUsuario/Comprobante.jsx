import { useState } from "react";
import "./css/comprobante.css";
import { CustomButton } from "../common/CustomButton";
import { FormModal } from "../common/FormModal";
import { FormCreateIngreso } from "../form/FormCreateIngreso";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import * as backDelete from "../../services/ComprobantePago";
export const Comprobante = ({ informacionCard, onClick }) => {
  const {
    id,
    adjuntos,
    fecha,
    ciudad,
    nit,
    tercero,
    concepto,
    banco,
    tipo_cuenta,
    numero_cuenta,

    valor,
  } = informacionCard;

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({ items: [{}] }); // Estado inicial de los datos del formulario

  const handleOpenModal = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  const handleSave = (data) => {
    setFormData(data);
    handleCloseModal();
  };
  return (
    <div className="containerComprobante   shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <h5>Transacción #{id}</h5>
        <div className="d-flex gap-4 my-4 containerButo">
          <BsTrashFill className="fs-5 text-secondary" onClick={onClick} />
          <BsPencilFill
            className="fs-5 text-secondary"
            onClick={() => handleOpenModal(crearIngreso)}
          />
          <FormModal
            isOpen={isEditModalOpen}
            onClose={handleCloseModal}
            initialValues={formData}
            onSave={handleSave}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>Fecha:</strong> {fecha}
        </div>
        <div>
          <strong>Ciudad:</strong> {ciudad}
        </div>
        <p>
          <strong>NIT:</strong> {nit}
        </p>
        <p>
          <strong>Tercero:</strong> {tercero}
        </p>
        <p>
          <strong>Concepto:</strong> {concepto}
        </p>
        <p>
          <strong>Banco:</strong> {banco}
        </p>
        <p>
          <strong>Tipo de Cuenta:</strong> {tipo_cuenta}
        </p>
        <p>
          <strong>Número de Cuenta:</strong> {numero_cuenta}
        </p>
        <p>
          <strong>Valor:</strong> {valor}
        </p>
        {adjuntos && (
          <p>
            <strong>Adjuntos:</strong> {adjuntos}
          </p>
        )}
      </div>
    </div>
  );
};
