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
