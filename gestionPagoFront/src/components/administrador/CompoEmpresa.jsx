import { useEffect, useState } from "react";
// import { Comprobante } from "./Comprobante"; // Asegúrate de que la ruta sea correcta
import "./css/compoEmpresa.css";

import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";

import { consultarEmpresa } from "../../services/Empresa";
import { Loading } from "../common/Loading";

import { Empresa } from "./common/Empresa";

export const CompoEmpresa = () => {
  const [error, setError] = useState(null);
  const informacionEmpresas = [
    {
      id: 1,
      nit: "123456789",
      nombre_empresa: "Freskaleche",
      tipo_cuenta1: "Ciudad A",
      nombre_banco1: "Tercero A",
      numero_cuenta1: "Concepto A",
      ciudad: "Cúcuta",
    },
    {
      id: 1,
      nit: "123456789",
      nombre_empresa: "Freskaleche",
      tipo_cuenta1: "Ciudad A",
      nombre_banco1: "Tercero A",
      numero_cuenta1: "Concepto A",
      ciudad: "Cúcuta",
    },
    {
      id: 1,
      nit: "123456789",
      nombre_empresa: "Freskaleche",
      tipo_cuenta1: "Ciudad A",
      nombre_banco1: "Tercero A",
      numero_cuenta1: "Concepto A",
      ciudad: "Cúcuta",
    },
  ];
  // const [informacionEmpresas, setInformacionEmpresas] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await consultarEmpresa();
  //     setInformacionEmpresas(data);
  //   };

  //   getData();
  // }, []);

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
          {informacionEmpresas.map((empresa) => (
            <Col key={empresa.id}>
              <Empresa
                informacionEmpresa={empresa}
                // onDelete={handleDelete}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
