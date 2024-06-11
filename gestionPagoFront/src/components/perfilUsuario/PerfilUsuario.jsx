import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PerfilHeader } from "../common/perfil/PerfilHeader";
// import "./css/perfiAdmin.css";
import foto from "../../assets/img/perfil.jpeg";
import { consultarUsuario } from "../../services/RegistroUsuario";
import { Loading } from "../common/Loading";
import { useEffect, useState } from "react";

export const PerfilUsuario = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await consultarUsuario();
        setProfileData(response[0]); // hacer una mejora para que salga por id, compare y traiga los datos por ahora esta setiado al primer registro
        console.log(response)
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
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error al cargar los datos del perfil</div>
      ) : (
        <Container>
          <Row>
            <Col sm={2} className="d-flex justify-content-center"></Col>
            <Col sm={2} className="d-flex justify-content-center">
              <PerfilHeader
                imageSrc={foto}
                name= {profileData?.nombre}
                profession="Profesión"
                className="perfil-header"
              />
            </Col>
            <Col sm={4} className="perfil-column p-4 py-5">
              <p><strong>Nombre:</strong> {profileData?.nombre}</p>
              <p><strong>Apellidos:</strong> {profileData?.apellido}</p>              
              <p><strong>Email:</strong> {profileData?.email}</p>
              <p><strong>Proceso:</strong> {profileData?.proceso}</p>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
