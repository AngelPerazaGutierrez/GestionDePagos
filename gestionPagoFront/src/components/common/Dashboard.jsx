import React, { useState, useEffect } from "react";
import "../../assets/css/common/dashboard.css";
import img1 from "../../assets/img/perfil.jpeg";
import { CustomButton } from "./CustomButton";
import { ImageComponent } from "./ImgComponent";
import { useThemeContext } from "../../userContext/ContextProvider";
useThemeContext;
export const Dashboard = () => {
  const { selectedOption, setSelectedOption, login } = useThemeContext();
  const [selectedPage, setSelectedPage] = useState("/inicio");
  const handledPagesSelect = (page) => {
    setSelectedPage(page.name);
    console.log(selectedPage);
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
          <h5>Cargor: {selectedOption}</h5>
        </div>
      </div>
      <div className="sidebar">
        {pages.map((page) => (
          <div className="d-grid mb-3">
            <CustomButton
              key={page.id}
              text={page.name}
              custom=""
              setSelected={setSelectedPage}
              onClick={() => handledPagesSelect(page)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
