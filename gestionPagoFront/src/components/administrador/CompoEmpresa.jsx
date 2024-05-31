import { useEffect, useState } from "react";
// import { Comprobante } from "./Comprobante"; // Asegúrate de que la ruta sea correcta
import "./css/compoEmpresa.css";

import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";
import { obtenerEmpresa } from '../../services/Empresa'

import { Loading } from "../common/Loading";

import { Empresa } from "./common/Empresa";

export const CompoEmpresa = () => {
  const [error, setError] = useState(null);

  const [informacionEmpresas, setInformacionEmpresas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await obtenerEmpresa();
      setInformacionEmpresas(data);
    };

    getData();
  }, []);
  

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
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
