import { useState } from "react";
import "../css/compoBancos.css";
import { FormModal } from "../../common/FormModal";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { useThemeContext } from "../../../userContext/ContextProvider";
import Swal from "sweetalert2";
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
  const [isDeleting, setIsDeleting] = useState(false);
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

  // delelete banco
  // const handleDelete = async () => {
  //   try {
  //     const response = await eliminarBanco(selectedBancoId);
  //     console.log("Banco eliminado:", response.data);
  //     handleCloseModal();
  //   } catch (error) {
  //     console.error("Error al eliminar el banco:", error);
  //   }
  // };

  const handleDelete = async () => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar este banco?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    });

    if (confirmacion.isConfirmed) {
      try {
        setIsDeleting(true); // Cambia el estado para ocultar la tarjeta mientras se elimina el banco
        const response = await eliminarBanco(selectedBancoId);
        console.log("Banco eliminado:", response.data);
        handleCloseModal();
        Swal.fire({
          title: "¡Eliminado!",
          text: "El banco ha sido eliminado correctamente.",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al intentar eliminar el banco.",
          icon: "error",
        });
        console.error("Error al eliminar el banco:", error);
      } finally {
        setIsDeleting(false); // Cambia el estado de vuelta después de la eliminación
      }
    }
  };

  return (
    <div className="containerComprobante   shadow ">
      <div className="  d-flex justify-content-arouter stilosIcon">
        <h5>Bancos</h5>
        <div className="d-flex gap-4 mb-3 containerButo icons">
          <BsTrashFill className="fs-5 " onClick={handleDelete} />
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
            onDelete={handleDelete}
            bancoId={selectedBancoId}
          />
        </div>
      </div>
      {!isDeleting && ( // Renderiza el contenido de la tarjeta solo si no se está eliminando el banco
        <div className=" items mb-5 ">
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
      )}
      {/* <div className="culumnadata items d-flex">
        <div>
          <strong>NIT:</strong> {nit}
        </div>
        <div>
          <strong>Tipo de Cuenta:</strong> {tipo_cuenta}
        </div>
        <div>
          <strong>Nombre del Banco</strong> {nombre_banco}
        </div>
      </div> */}
    </div>
  );
};
