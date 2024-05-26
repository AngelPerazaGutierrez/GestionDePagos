import { useEffect, useState } from "react";
import "./css/compoBancos.css";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";
import { obtenerBanco } from "../../services/Bonco";
import { Loading } from "../common/Loading";
import { Bancos } from "./common/Bancos";
console.log(obtenerBanco, "Comprobante");
export const CompoBanco = () => {
  const [error, setError] = useState(null);
  // const informacionBancos = [
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     tercero: "Tercero A",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     nombre_banco: "Banco de Bogota",
  //     valor: 100,
  //   },
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     tercero: "Tercero A",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     nombre_banco: "Bancolombia",
  //     valor: 100,
  //   },
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     tercero: "Tercero A",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     nombre_banco: " Virtual del Banco AV Villas ",
  //     valor: 100,
  //   },
  // ];
  const [informacionBancos, setInformacionBancos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await obtenerBanco();
      setInformacionBancos(data);
    };

    getData();
  }, []);

  //   const handleDelete = async (comprobanteId) => {
  //     const confirmacion = await Swal.fire({
  //       title: "¿Estás seguro?",
  //       text: "¿Quieres eliminar este comprobante?",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Sí, eliminar",
  //       cancelButtonText: "Cancelar",
  //       confirmButtonColor: "#dc3545",
  //       cancelButtonColor: "#6c757d",
  //     });

  //     if (confirmacion.isConfirmed) {
  //       try {
  //         const eliminado = await eliminarComprobante(comprobanteId);
  //         console.log(eliminado, comprobanteId, "eliminado");
  //         if (eliminado) {
  //           Swal.fire({
  //             title: "¡Eliminado!",
  //             text: "El comprobante ha sido eliminado correctamente.",
  //             icon: "success",
  //           });
  //           console.log("Comprobante eliminado correctamente");
  //         } else {
  //           Swal.fire({
  //             title: "Error",
  //             text: "Hubo un error al intentar eliminar el comprobante.",
  //             icon: "error",
  //           });
  //           console.error("Error al eliminar el comprobante");
  //         }
  //       } catch (error) {
  //         Swal.fire({
  //           title: "Error",
  //           text: "Hubo un error al intentar eliminar el comprobante.",
  //           icon: "error",
  //         });
  //         console.error("Error al intentar eliminar el comprobante:", error);
  //       }
  //     }
  //   };

  return (
    <div className="containerCard py-4  rounded container  gap-1 w-full hidden lg:flex  justify-center items-center mb-4">
      {error ? (
        <Loading />
      ) : (
        <Row>
          {informacionBancos.map((bancos) => (
            <Col sm={8} key={bancos.id}>
              <Bancos
                informacionBanco={bancos}
                // onDelete={handleDelete}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
