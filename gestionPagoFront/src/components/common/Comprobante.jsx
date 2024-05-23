import { useState } from "react";
import "../../assets/css/common/comprobante.css";
import { CustomButton } from "./CustomButton";

import { FormCreateIngreso } from "../form/FormCreateIngreso";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
export const Comprobante = ({ informacionCard, onSave }) => {
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

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [cpData, setCpData] = useState(informacionCard);

  const handleEdit = () => {
    console.log("editar");
  };
  const handleDelete = () => {
    console.log("handleDelete");
  };
  return (
    <div className="containerComprobante shadow ">
      <div className="px-4 p-2  d-flex justify-content-arouter stylBoton">
        <h5>Transacción #{id}</h5>
        <div className="d-flex gap-4 my-4 containerButon">
          <BsTrashFill className="fs-5 text-secondary" onClick={handleDelete} />
          <BsPencilFill className="fs-5 text-secondary" onClick={handleEdit} />
        </div>
      </div>
      <div className="d-flex gap-5 m-4 pb-4 ">
        <div>
          <strong>Fecha:</strong> {fecha}
        </div>
        <p>
          <strong>Ciudad:</strong> {ciudad}
        </p>
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

        <FormCreateIngreso
          initialValues={{ items: [cpData] }}
          // onSave={handleSave}
        />
      </div>
    </div>
  );
};
