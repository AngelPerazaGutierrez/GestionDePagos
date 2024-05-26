import { useEffect, useState } from "react";
// import { Comprobante } from "./Comprobante"; // Asegúrate de que la ruta sea correcta
import "./css/compoBancos.css";

import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";

import { consultarUsuario } from "../../services/RegistroUsuario";
import { Loading } from "../common/Loading";
import { Bancos } from "./common/Bancos";
import { Empleados } from "./common/Empleados";
import { Password } from "@mui/icons-material";

export const CompoEmpleados = () => {
  const [error, setError] = useState(null);
  // const informacionEmpleados = [
  //   {
  //     id: 1,
  //     nombre: "Daniela",
  //     apellido: "Vega",
  //     cedula: "1233455",
  //     email: "123456789",
  //     password: "Tercero A",
  //     fecha_creacion: "12/06/2024",
  //     proceso: "Banco A",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Daniela",
  //     apellido: "Vega",
  //     cedula: "1233455",
  //     email: "123456789",
  //     password: "Tercero A",
  //     fecha_creacion: "12/06/2024",
  //     proceso: "Banco A",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Daniela",
  //     apellido: "Vega",
  //     cedula: "1233455",
  //     email: "123456789",
  //     password: "Tercero A",
  //     fecha_creacion: "12/06/2024",
  //     proceso: "Banco A",
  //   },
  // ];
  const [informacionEmpleados, setinformacionEmpleados] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await consultarUsuario();
      setinformacionEmpleados(data);
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
          {informacionEmpleados.map((empleo) => (
            <Col key={empleo.id}>
              <Empleados
                informacionEmpleo={empleo}
                // onDelete={handleDelete}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
