import { useEffect, useState } from "react";
import { Comprobante } from "./Comprobante"; // Asegúrate de que la ruta sea correcta
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
  const Card = [
    {
      id: 1,
      fecha: "2024-05-22",
      ciudad: "Ciudad A",
      nit: "123456789",
      tercero: "Tercero A",
      concepto: "Concepto A",
      banco: "Banco A",
      tipo_cuenta: "Cuenta corriente",
      numero_cuenta: "123456789",
      valor: 100,
    },
    {
      id: 1,
      fecha: "2024-05-22",
      ciudad: "Ciudad A",
      nit: "123456789",
      tercero: "Tercero A",
      concepto: "Concepto A",
      banco: "Banco A",
      tipo_cuenta: "Cuenta corriente",
      numero_cuenta: "123456789",
      valor: 100,
    },
    {
      id: 1,
      fecha: "2024-05-22",
      ciudad: "Ciudad A",
      nit: "123456789",
      tercero: "Tercero A",
      concepto: "Concepto A",
      banco: "Banco A",
      tipo_cuenta: "Cuenta corriente",
      numero_cuenta: "123456789",
      valor: 100,
    },
  ];
  const [informacionCard, setInformacionCard] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await obtenerComprobantes();
      setInformacionCard(data);
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
          console.log("Comprobante eliminado correctamente");
        } else {
          Swal.fire({
            title: "Error",
            text: "Hubo un error al intentar eliminar el comprobante.",
            icon: "error",
          });
          console.error("Error al eliminar el comprobante");
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

  return (
    <div className="containerCard py-4  rounded container  gap-1 w-full hidden lg:flex  justify-center items-center mb-4">
      {error ? (
        <Loading />
      ) : (
        <Container>
          <Row>
            {Card.map((transaccion) => (
              <Col md="12">
                <Comprobante
                  key={transaccion.id}
                  informacionCard={transaccion}
                  onClick={handleDelete}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};
