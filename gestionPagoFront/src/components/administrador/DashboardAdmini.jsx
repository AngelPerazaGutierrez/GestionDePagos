// DashboardUser.jsx
import React from "react";
import "./css/dashboardAdmin.css";
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

export const DashboardAdmini = () => {
  const { selectedPage, setSelectedPage, setshowPagesProfile } =
    useThemeContext();

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
      id: 2,
      name: "Crear los temas",
      icon: <BsJustify className="fs-6 m-2" />,
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
    <div className="profile-container  shadow">
      <PerfilHeader
        imageSrc="https://placehold.co/200x200"
        name="Julian"
        profession="Profesión"
      />
      <Navegacion
        pages={pages}
        onSelectPage={handledPagesSelect}
        className="item "
      />
    </div>
  );
};
