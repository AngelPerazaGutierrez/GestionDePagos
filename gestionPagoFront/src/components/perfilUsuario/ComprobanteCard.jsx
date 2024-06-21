import { useEffect, useState } from "react";
import { Comprobante } from "./Comprobante"; 
import "../../assets/css/perfilUsuario/comprobanteCard.css";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  obtenerComprobantes,
  eliminarComprobante,
} from "../../services/ComprobantePago";
import { Loading } from "../common/Loading";

export const ComprobanteCard = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const [informacionCard, setInformacionCard] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await obtenerComprobantes();
        setInformacionCard(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleDelete = async (comprobanteId) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar este comprobante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    });

    if (confirmacion.isConfirmed) {
      try {
        const eliminado = await eliminarComprobante(comprobanteId);
        if (eliminado) {
          Swal.fire({
            title: "¡Eliminado!",
            text: "El comprobante ha sido eliminado correctamente.",
            icon: "success",
          });
          setInformacionCard((data) =>
            data.filter((item) => item.id !== comprobanteId)
          );
        } else {
          throw new Error("Error al eliminar el comprobante");
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al intentar eliminar el comprobante.",
          icon: "error",
        });
        console.error("Error al intentar eliminar el comprobante:", error);
      }
    }
  };


 const handleEdit = async (comprobanteId) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar este comprobante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    });

    if (confirmacion.isConfirmed) {
      try {
        const editado = await editarComprobante(comprobanteId);
        if (editado) {
          Swal.fire({
            title: "Editado!",
            text: "El comprobante ha sido Editado correctamente.",
            icon: "success",
          });
          setInformacionCard((data) =>
            data.filter((item) => item.id !== comprobanteId)
          );
        } else {
          throw new Error("Error al eliminar el comprobante");
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al intentar eliminar el comprobante.",
          icon: "error",
        });
        console.error("Error al intentar eliminar el comprobante:", error);
      }
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
          {informacionCard.map((transaccion) => (
            <Col md="12" key={transaccion.id}>
              <Comprobante
                informacionCard={transaccion}
                onClick={() => handleDelete(transaccion.id)}
                               
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};