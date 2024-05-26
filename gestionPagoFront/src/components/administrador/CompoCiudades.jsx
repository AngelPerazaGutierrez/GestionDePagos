import { useEffect, useState } from "react";

import "./css/compoCiudades.css";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";

import { obtenerCiudad } from "../../services/Ciudad";
import { Loading } from "../common/Loading";
import { Ciudades } from "./common/Ciudades";

export const CompoCiudades = () => {
  const [error, setError] = useState(null);
  // const informacionCiudades = [
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Medellin",
  //     nit: "123456789",
  //     pais: "colombia",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     numero_cuenta: "123456789",
  //     valor: 100,
  //   },
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Bogota",
  //     nit: "123456789",
  //     pais: "Colombia",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     numero_cuenta: "123456789",
  //     valor: 100,
  //   },
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     pais: "Colombia",
  //     concepto: "Concepto A",
  //     ciudad: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     numero_cuenta: "123456789",
  //     valor: 100,
  //   },
  // ];

  const [informacionCiudades, setInformacionCiudades] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await obtenerCiudad();
      setInformacionCiudades(data);
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
        <Container>
          <Row>
            {informacionCiudades.map((ciudades) => (
              <Col md="12" key={ciudades.id}>
                <Ciudades
                  informacionCiudades={ciudades}
                  // onClick={handleDelete}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};
