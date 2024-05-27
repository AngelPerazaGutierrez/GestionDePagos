import { useState } from "react";
import "../css/compoEmpresa.css";
// import { CustomButton } from "../../common/CustomButton";
import { FormModal } from "../../common/FormModal";
// import { FormCreateIngreso } from "../../form/FormCreateIngreso";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { eliminarEmpresa, editarEmpresa } from "../../../services/Empresa";
import { useThemeContext } from "../../../userContext/ContextProvider";
export const Empresa = ({ informacionEmpresa, onClick }) => {
  const {
    nit,
    nombre_empresa,
    tipo_cuenta1,
    nombre_banco1,
    numero_cuenta1,
    ciudad,
  } = informacionEmpresa;

  const { formType, setFormType, isModalOpen, setIsModalOpen } =
    useThemeContext();
  const [SelectedEmpresaId, setSelectedEmpresaId] = useState(null);
  const handleOpenModal = (type, empleoId) => {
    setFormType(type);
    setIsModalOpen(true);
    setSelectedEmpresaId(empleoId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  const handleSave = async () => {
    try {
      const response = await editarUsuario(SelectedEmpresaId);
      console.log("Banco editado:", response.data);
      handleCloseModal();
      setFormType("");
    } catch (error) {
      console.error("Error al editar el banco:", error);
    }
  };
  // delelete ciudad
  const handleDelete = async () => {
    try {
      const response = await eliminarUsuario(SelectedEmpresaId);
      console.log("Banco eliminado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al eliminar el banco:", error);
    }
  };
  return (
    <div className="containerComprobante  dflex shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <h5>Empresas</h5>
        <div className="d-flex gap-4 my-4 icons containerButo">
          <BsTrashFill className="fs-5 text-secondary" onClick={onClick} />
          <BsPencilFill
            className="fs-5 text-secondary"
            onClick={() =>
              handleOpenModal("crearEmpresa", informacionEmpresa.id)
            }
          />

          <FormModal
            isOpen={isModalOpen}
            formType={formType}
            onClose={handleCloseModal}
            onDelete={handleDelete}
            onSave={handleSave}
            bancoId={SelectedEmpresaId}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>NIT</strong> {nit}
        </div>
        <div>
          <strong> Nombre de la empresa</strong> {nombre_empresa}
        </div>
        <div>
          <strong> Tipo de cuenta 1:</strong> {tipo_cuenta1}
        </div>
        <div>
          <strong>Numero de banco:</strong> {tipo_cuenta1}
        </div>
        <div>
          <strong>Numero de cuenta:</strong> {nombre_banco1}
        </div>
        <div>
          <strong>Ciudad:</strong> {numero_cuenta1}
        </div>
      </div>
    </div>
  );
};
