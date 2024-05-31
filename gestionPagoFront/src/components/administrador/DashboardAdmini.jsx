// DashboardUser.jsx
import React from "react";
import "./css/dashboardAdmin.css";
import foto from "../../assets/img/perfil.jpeg";
import {
  BsEyeFill,
  BsPersonFill,
  BsJustify,
  BsBank2,
  BsHospital,
  BsPeople,
} from "react-icons/bs";
import { useThemeContext } from "../../userContext/ContextProvider";
import { Navegacion } from "../common/perfil/Navegacion";
import { PerfilHeader } from "../common/perfil/PerfilHeader";
import { useState, useEffect } from "react";
import { Loading } from "../common/Loading";
import { consultarUsuario } from "../../services/RegistroUsuario";
export const DashboardAdmini = () => {
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
      name: "Perfil usuario",
      icon: <BsPersonFill className="fs-6 m-2 " />,
    },

    {
      id: 3,
      name: "Visualizar los bancos",
      icon: <BsBank2 className="fs-6 m-2" />,
    },
    {
      id: 3,
      name: "Visualizar las ciudades",
      icon: <BsHospital className="fs-6 m-2" />,
    },
    {
      id: 3,
      name: "Visualizar  empleados",
      icon: <BsPeople className="fs-7 m-2" />,
    },
    {
      id: 3,
      name: "Visualizar  empresas",
      icon: <BsEyeFill className="fs-5 m-2" />,
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
        className="item "
      />
    </div>
  );
};
