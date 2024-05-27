import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsHeadset } from "react-icons/bs";
import { PerfilHeader } from "../common/perfil/PerfilHeader";
import "./css/perfiAdmin.css";
import foto from "../../assets/img/perfil.jpeg";
import { consultarUsuario } from "../../services/RegistroUsuario";
import { Loading } from "../common/Loading";
import { useEffect, useState } from "react";

export const PerfilAdmin = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await consultarUsuario();
        setProfileData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <div className="perfilcontainer">
      {error ? (
        <Loading />
      ) : (
        <Container>
          <Row>
            <Col sm={2} className="d-flex   justify-content-center border p-2">
              <PerfilHeader
                imageSrc={foto}
                // name="Julian"
                profession="Profesión"
                className="perfil-header"
              />
            </Col>
            <Col sm={4} className="perfil-column ">
              <strong>Nombre:</strong> {profileData?.nombre}
              <strong>apellido:</strong>
              {profileData?.apellido}
              <strong>Carrera profesional:</strong>
              {profileData?.profession}
              <strong>Email</strong>
              {profileData?.email}
              <strong>proceso</strong>
              {profileData?.proceso}
            </Col>
            <Col sm={4} className="perfil-columntittle mt-5">
              <BsHeadset className="fs-1 fw-bold" />
              <h3 className="fw-bold">Soporte</h3>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
