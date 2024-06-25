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
import { obtenerUsuario } from "../../services/RegistroUsuario";


export const DashboardAdmini = () => {
  const { selectedPage, setSelectedPage, setshowPagesProfile } =
    useThemeContext();

  const [profileDas, setProfileDas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await obtenerUsuario();
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
      icon: <BsPersonFill className="fs-6 m-2 " />,
    },

    {
      id: 2,
      name: "Bancos",
      icon: <BsBank2 className="fs-6 m-2" />,
    },    
    {
      id: 3,
      name: "Usuarios",
      icon: <BsPeople className="fs-7 m-2" />,
    },
    {
      id: 4,
      name: "Empresas",
      icon: <BsEyeFill className="fs-5 m-2" />,
    },
    {
      id: 5,
      name: "Comprobantes de pago",
      icon: <BsEyeFill className="fs-5 m-2" />,
    },
  ];

  return (
    <div className="profile-container">
      <PerfilHeader
        imageSrc={foto}
        name={profileDas?.nombre}
        profession={profileDas?.profession}
        proceso={profileDas?.proceso}
        className="perfil-header"
      />
      <Navegacion
        pages={pages}
        onSelectPage={handledPagesSelect}
        className="item"
      />
    </div>
  );
};
