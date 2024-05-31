import { useState } from "react";
import "../css/compoCiudades.css";
import { CustomButton } from "../../common/CustomButton";
import { useThemeContext } from "../../../userContext/ContextProvider";
import { FormModal } from "../../common/FormModal";
import {
  editarUsuario,
  eliminarUsuario,
} from "../../../services/RegistroUsuario";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
// import * as backDelete from "../../../services/ComprobantePago";
export const Empleados = ({ informacionEmpleo, onClick }) => {
  const {
    cedula,
    nombre,
    apellido,
    email,
    password,
    fecha_creacion,
    proceso,
    ciudad,
  } = informacionEmpleo;

  const { formType, setFormType, isModalOpen, setIsModalOpen } =
    useThemeContext();
  const [SelecteUserId, setSelectedUserId] = useState(null);

  const handleOpenModal = (type, userId) => {
    setFormType(type);
    setIsModalOpen(true);
    setSelectedUserId(userId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  // Edita empleoados
  const handleSave = async () => {
    try {
      const response = await editarUsuario(SelecteUserId);
      console.log("Banco editado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al editar el banco:", error);
    }
  };
  // delelete ciudad
  const handleDelete = async () => {
    try {
      const response = await eliminarUsuario(SelecteUserId);
      console.log("Banco eliminado:", response.data);
      handleCloseModal();
    } catch (error) {
      console.error("Error al eliminar el banco:", error);
    }
  };
  return (
    <div className="containerComprobante  dflex shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <img
          src="https://placehold.co/200x200"
          alt="foto empleado"
          className="  rounded-circle"
          width={60}
          height={60}
        />
        <div className="d-flex gap-4 my-4 containerButo icons">
          <BsTrashFill className="fs-5 text-secondary" onClick={handleDelete} />
          <BsPencilFill
            className="fs-5 text-secondary"
            onClick={() => handleOpenModal("crearUsuario", informacionUser.id)}
          />

          <FormModal
            isOpen={isModalOpen}
            formType={formType}
            onSave={handleSave}
            onClose={handleCloseModal}
            onDelete={handleDelete}
            // bancoId={selectedBancoId}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>Nombre:</strong> {nombre}
        </div>
        <div>
          ,<strong>Apellido:</strong> {apellido}
        </div>
        <div>
          <strong> cedula:</strong> {cedula}
        </div>
        <div>
          <strong> email:</strong> {email}
        </div>

        <div>
          <strong>password:</strong> {password}
        </div>
        <div>
          <strong>fecha creacion:</strong> {fecha_creacion}
        </div>

        <div>
          <strong>proceso:</strong> {proceso}
        </div>
      </div>
    </div>
  );
};
