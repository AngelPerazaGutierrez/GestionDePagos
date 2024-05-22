import React from "react";

import { FormCreateBanco } from "../components/form/FormCreateBanco";
import { FormCreateUsuario } from "../components/form/FormCreateUsuario";
import { FormCreateCiudad } from "../components/form/FormCreateCiudad ";
import { FormCreateEmpresa } from "../components/form/FormCreateEmpresa";

export const AdminPage = () => {
  return (
    <div
      className="justify-content-center align-items-center"
      style={{ height: "100vh", marginTop: "200px" }}
    >
      <div className=" container d-flex justify-content-between">
        <FormCreateBanco />
        <FormCreateUsuario />
        <FormCreateCiudad />
        <FormCreateEmpresa />
      </div>
    </div>
  );
};
