import React, { useState } from "react";
import "../../assets/css/common/dashboard.css";
import img1 from "../../assets/img/perfil.jpeg";
import { CustomButton } from "./CustomButton";
import { ImageComponent } from "./ImgComponent";
import { useThemeContext } from "../../userContext/ContextProvider";

export const Dashboard = () => {
  const { selectedPage, setSelectedPage, setshowPagesProfile } =
    useThemeContext();

  const handledPagesSelect = (page) => {
    setSelectedPage(page.name);
    console.log(page.name);
    setshowPagesProfile(true);
  };

  const pages = [
    { id: 1, name: "Perfil" },
    { id: 2, name: "Crear comprobante de pago" },
    { id: 3, name: "Visualizar comprobantes de pago" },
  ];

  return (
    <div className="dashboard shadow">
      <div className="perfilDashbord">
        <div className="mt-5 mb-3">
          <p>Nombre Daniel</p>
          <h5>Cargo: </h5>
        </div>
      </div>
      <div className="sidebar">
        {pages.map((page) => (
          <div className="d-grid mb-3" key={page.id}>
            <CustomButton
              text={page.name}
              custom=""
              setSelected={setSelectedPage}
              onClick={() => handledPagesSelect(page)}
            />
          </div>
        ))}
      </div>
      <div className="content">
        {/* <h2>{selectedPage}</h2> */}
        {/* Aquí puedes renderizar componentes diferentes según la página seleccionada */}
      </div>
    </div>
  );
};
