import { useEffect, useState } from "react";
import "./css/compoBancos.css";
import { Row, Col } from "react-bootstrap/";
import { obtenerBanco } from "../../services/Bonco";
import { Loading } from "../common/Loading";
import { Bancos } from "./common/Bancos";

export const CompoBanco = () => {
  const [error, setError] = useState(null);
  const [informacionBancos, setInformacionBancos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await obtenerBanco();
      setInformacionBancos(data);
    };

    getData();
  }, []);
  // const informacionBancos = [
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

  return (
    <div className="containerCard py-5  rounded container  gap-2 w-full hidden lg:flex  justify-center items-center mb-5">
      {error ? (
        <Loading />
      ) : (
        <Row>
          {informacionBancos.map((bancos) => (
            <Col sm={12} key={bancos.id}>
              <Bancos informacionBanco={bancos} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
