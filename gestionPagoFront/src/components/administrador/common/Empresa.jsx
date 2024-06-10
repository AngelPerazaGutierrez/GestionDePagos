import { useState } from "react";
import "../css/compoEmpresa.css";
import { FormModal } from "../../common/FormModal";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { eliminarEmpresa } from "../../../services/Empresa";
import { useThemeContext } from "../../../userContext/ContextProvider";

export const Empresa = ({ informacionEmpresa, onClick, onSave }) => {
  const { formType, setFormType, isModalOpen, setIsModalOpen } = useThemeContext();
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);

  const handleOpenModal = (type, empresa) => {
    setFormType(type);
    setIsModalOpen(true);
    setSelectedEmpresa(empresa);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  return (
    <div className="containerComprobante dflex shadow">
      <div className="d-flex justify-content-around stilosIcon">
        <h5>Empresas</h5>
        <div className="d-flex gap-4 my-4 icons containerButo">
          <BsTrashFill className="fs-5 text-secondary" onClick={onClick} />
          <BsPencilFill
            className="fs-5 text-secondary"
            onClick={() => handleOpenModal("editarEmpresa", informacionEmpresa)}
          />
          <FormModal
            isOpen={isModalOpen}
            formType={formType}
            onClose={handleCloseModal}
            initialValues={selectedEmpresa}
            onSave={(updatedEmpresa) => {
              onSave(informacionEmpresa.id, updatedEmpresa);
              handleCloseModal();
            }}
          />
        </div>
      </div>
      <div className="culumnadata items d-flex">
        <div>
          <strong>NIT:</strong> {informacionEmpresa.nit}
        </div>
        <div>
          <strong>Nombre de la empresa:</strong> {informacionEmpresa.nombre_empresa}
        </div>
        <div>
          <strong>Tipo de cuenta 1:</strong> {informacionEmpresa.tipo_cuenta1}
        </div>
        <div>
          <strong>Nombre del banco:</strong> {informacionEmpresa.nombre_banco1}
        </div>
        <div>
          <strong>Número de cuenta:</strong> {informacionEmpresa.numero_cuenta1}
        </div>
        <div>
          <strong>Ciudad:</strong> {informacionEmpresa.ciudad}
        </div>
      </div>
    </div>
  );
};
