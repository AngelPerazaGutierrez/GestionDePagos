import { useState } from "react";
import "../css/compoCiudades.css";
import { useThemeContext } from "../../../userContext/ContextProvider";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { FormModal } from "../../common/FormModal";
import { eliminarCiudad, editarCiudad } from "../../../services/Ciudad";
export const Ciudades = ({ informacionCiudades, onClick }) => {
  const { ciudad, pais } = informacionCiudades;

  const { formType, setFormType, isModalOpen, setIsModalOpen } =
    useThemeContext();
  const [selectedCiudadId, setSelectedCiudadId] = useState(null);
  const handleOpenModal = (type, bancoId) => {
    setFormType(type);
    setIsModalOpen(true);
    setSelectedCiudadId(bancoId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  // Edita el ciudad
  const handleSave = async () => {
    try {
      const response = await editarCiudad(selectedCiudadId);
      console.log("Banco editado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al editar el banco:", error);
    }
  };
  // delelete ciudad
  const handleDelete = async () => {
    try {
      const response = await eliminarCiudad(selectedCiudadId);
      console.log("eliminarCiudad eliminado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al eliminar el banco:", error);
    }
  };
  return (
    <div className="containerComprobante  dflex shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <h5>Ciudades</h5>
        <div className="d-flex gap-4 my-4 containerButo">
          <BsTrashFill className="fs-5 text-secondary" onClick={handleDelete} />
          <BsPencilFill
            className="fs-5 text-secondary"
            onClick={() =>
              handleOpenModal("crearCiudad", informacionCiudades.id)
            }
          />

          <FormModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            formType={formType}
            onSave={handleSave}
            onDelete={handleDelete}
            bancoId={selectedBancoId}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>Pais:</strong> {pais}
        </div>
        <div>
          <strong>Ciudad:</strong> {ciudad}
        </div>
      </div>
    </div>
  );
};
