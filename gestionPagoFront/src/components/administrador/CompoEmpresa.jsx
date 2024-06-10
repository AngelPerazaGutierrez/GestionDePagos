import { useEffect, useState } from "react";
import "./css/compoEmpresa.css";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";
import { eliminarEmpresa, obtenerEmpresa, editarEmpresa } from '../../services/Empresa';
import { Loading } from "../common/Loading";
import { Empresa } from "./common/Empresa";

export const CompoEmpresa = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [informacionEmpresas, setInformacionEmpresas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await obtenerEmpresa();
        setInformacionEmpresas(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleDelete = async (empresaId) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar esta empresa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    });

    if (confirmacion.isConfirmed) {
      try {
        await eliminarEmpresa(empresaId);
        Swal.fire({
          title: "¡Eliminado!",
          text: "La empresa se ha eliminado correctamente.",
          icon: "success",
        });
        setInformacionEmpresas((prevInfo) =>
          prevInfo.filter((item) => item.id !== empresaId)
        );
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al intentar eliminar la empresa.",
          icon: "error",
        });
        console.error("Error al intentar eliminar la empresa:", error);
      }
    }
  };

  const handleSave = async (empresaId, updatedEmpresa) => {
    try {
      await editarEmpresa(empresaId, updatedEmpresa);
      setInformacionEmpresas((prevInfo) =>
        prevInfo.map((item) =>
          item.id === empresaId ? { ...item, ...updatedEmpresa } : item
        )
      );
      Swal.fire({
        title: "¡Editado!",
        text: "La empresa se ha editado correctamente.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un error al intentar editar la empresa.",
        icon: "error",
      });
      console.error("Error al intentar editar la empresa:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="containerCard py-4 rounded container gap-1 w-full hidden lg:flex justify-center items-center mb-4">
      <Container>
        <Row>
          {informacionEmpresas.map((empresa) => (
            <Col md="12" key={empresa.id}>
              <Empresa
                informacionEmpresa={empresa}
                onClick={() => handleDelete(empresa.id)}
                onSave={(updatedEmpresa) => handleSave(empresa.id, updatedEmpresa)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};


