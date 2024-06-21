import { useEffect, useState } from "react";
import "./css/compoBancos.css";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap/";
import { CustomButton } from "../common/CustomButton";
import { obtenerUsuario } from "../../services/RegistroUsuario";
import { Loading } from "../common/Loading";
import { Empleados } from "./common/Empleados";
import { Password } from "@mui/icons-material";
import { useThemeContext } from "../../userContext/ContextProvider";
import { FormCreateUsuario } from "../form/FormCreateUsuario";

export const CompoEmpleados = () => {
  const [error, setError] = useState(null);
  const [informacionEmpleados, setInformacionEmpleados] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await obtenerUsuario();
      setInformacionEmpleados(data);
    };

    getData();
  }, []);


  return (
    <div className="containerCard py-5  rounded container  gap-2 w-full hidden lg:flex  justify-center items-center mb-5">
      {error ? (
        <Loading />
      ) : (
        <Row>
          {informacionEmpleados.map((empleados) => (
            <Col sm={12} key={empleados.id}>
              <Empleados informacionEmpleados={empleados} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
