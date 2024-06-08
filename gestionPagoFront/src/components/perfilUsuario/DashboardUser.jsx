import "./css/dashboar.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BsEyeFill, BsPersonFill, BsJustify } from "react-icons/bs";
import { CustomButton } from "../common/CustomButton";
import { Navegacion } from "../common/perfil/Navegacion";
import { PerfilHeader } from "../common/perfil/PerfilHeader";
import { useThemeContext } from "../../userContext/ContextProvider";
import foto from "../../assets/img/perfil.jpeg";
import { consultarUsuario } from "../../services/RegistroUsuario";



export const DashboardUser = () => {
  const { selectedPage, setSelectedPage, setshowPagesProfile } =
    useThemeContext();

  const [profileDas, setProfileDas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await consultarUsuario();
        setProfileDas(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    useState;
    fetchProfileData();
  }, []);


  const handledPagesSelect = (page) => {
    setSelectedPage(page.name);
    console.log(page.name);
    setshowPagesProfile(true);
  };

  const pages = [
    {
      id: 1,
      name: "Mi perfil",
      icon: <BsPersonFill className="fs-3 p-" style={{ flex: "" }} />,
    },
    {
      id: 2,
      name: "Crear comprobante de pago",
      icon: <BsJustify className="fs-3 m-2" />,
    },
    {
      id: 3,
      name: "Visualizar comprobantes de pago",
      icon: <BsEyeFill className="fs-3 m-2 " />,
    },
  ];
  return (
    <div className="profile-container mt-5  shadow">
      <PerfilHeader
        imageSrc={foto}
        name={profileDas?.nombre}
        profession={profileDas?.profession}
        proceso={profileDas?.proceso}
        className="perfil-header"
      />
      {/* <strong>Nombre:</strong> {profileData?.nombre}
      <strong>apellido:</strong>
      {profileData?.apellido}
      <strong>Carrera profesional:</strong>
      {profileData?.profession}
      <strong>Email</strong>
      {profileData?.email}
      <strong>proceso</strong>
      {profileData?.proceso} */}
      <Navegacion
        pages={pages}
        onSelectPage={handledPagesSelect}
        className="item"
      />
    </div>
  );
  
};
