import { useState } from "react";
import "../css/compoBancos.css";
import { FormModal } from "../../common/FormModal";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { useThemeContext } from "../../../userContext/ContextProvider";

import { eliminarBanco, editarBanco } from "../../../services/Bonco";

export const Bancos = ({ informacionBanco, onClick, onEdit }) => {
  const { id, nit, nombre_banco, tipo_cuenta } = informacionBanco;

  const defaultValues = {
    items: [{ id:"", nit: "", tipo_cuenta: "Ahorro", nombre_banco: "" }],
  };
  // useContext
  const { formType, setFormType, isModalOpen, setIsModalOpen } =
    useThemeContext();
  const [selectedBancoId, setSelectedBancoId] = useState(null);

  const handleOpenModal = (type, bancoId) => {
    setFormType(type);
    setIsModalOpen(true);
    setSelectedBancoId(bancoId);
    console.log(bancoId)
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
      console.log(data)
      // handleCloseModal();
    } catch (error) {
      console.error("Error al editar el banco:", error);
    }
  };

  // delelete bonco
  // const handleDelete = async () => {
  //   try {
  //     const response = await eliminarBanco(selectedBancoId);
  //     console.log("Banco eliminado:", response.data);
  //     handleCloseModal();
  //   } catch (error) {
  //     console.error("Error al eliminar el banco:", error);
  //   }
  // };

  return (
    <div className="containerComprobante  dflex shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <h5>Bancos</h5>
        <div className="d-flex gap-4 my-4 containerButo icons">
          {/* <BsTrashFill className="fs-5 " onClick={handleDelete} /> */}
          <BsPencilFill
            className="fs-5  "
            onClick={() => handleOpenModal("crearBancos", informacionBanco.id)}
          />

          <FormModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            formType={formType}
            defaultValues={defaultValues}
            onSave={handleSave}
            // onDelete={handleDelete}
            bancoId={selectedBancoId}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>ID:</strong> {id}
        </div>
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
