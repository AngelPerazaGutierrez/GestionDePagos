import { useState } from "react";
import "../css/compoBancos.css";
import { FormModal } from "../../common/FormModal";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { useThemeContext } from "../../../userContext/ContextProvider";

import { eliminarBanco, editarBanco } from "../../../services/Bonco";

export const Bancos = ({ informacionBanco, onClick, onEdit }) => {
  const { nit, nombre_banco, tipo_cuenta } = informacionBanco;

  const defaultValues = {
    items: [{ nit: "", tipo_cuenta: "Ahorro", nombre_banco: "" }],
  };
  // useContext
  const { formType, setFormType, isModalOpen, setIsModalOpen } =
    useThemeContext();
  const [selectedBancoId, setSelectedBancoId] = useState(null);

  const handleOpenModal = (type, bancoId) => {
    setFormType(type);
    setIsModalOpen(true);
    setSelectedBancoId(bancoId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  // Edita el banco
  const handleSave = async () => {
    try {
      const response = await editarBanco(selectedBancoId);
      console.log("Banco editado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al editar el banco:", error);
    }
  };

  // delelete bonco
  const handleDelete = async () => {
    try {
      const response = await eliminarBanco(selectedBancoId);
      console.log("Banco eliminado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al eliminar el banco:", error);
    }
  };

  return (
    <div className="containerComprobante  dflex shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <h5>Bancos</h5>
        <div className="d-flex gap-4 my-4 containerButo">
          <BsTrashFill className="fs-5 text-secondary" onClick={handleDelete} />
          <BsPencilFill
            className="fs-5 text-secondary"
            onClick={() => handleOpenModal("crearBancos", informacionBanco.id)}
          />

          <FormModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            formType={formType}
            defaultValues={defaultValues}
            onSave={handleSave}
            onDelete={handleDelete}
            bancoId={selectedBancoId}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>NIT:</strong> {nit}
        </div>
        <div>
          <strong>Tipo de Cuenta:</strong> {tipo_cuenta}
        </div>
        <div>
          <strong>Nombre del Banco</strong> {nombre_banco}
        </div>
      </div>
    </div>
  );
};
