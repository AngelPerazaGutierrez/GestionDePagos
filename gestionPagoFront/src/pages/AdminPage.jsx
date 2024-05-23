import React from "react";

import { FormCreateBanco } from "../components/form/FormCreateBanco";
import { FormCreateUsuario } from "../components/form/FormCreateUsuario";
import { FormCreateCiudad } from "../components/form/FormCreateCiudad ";
import { FormCreateEmpresa } from "../components/form/FormCreateEmpresa";
import { ComprobanteCard } from "../components/perfilUsuario/ComprobanteCard";
import { Comprobante } from "../components/common/Comprobante";

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
        {/* <Comprobante /> */}
        <ComprobanteCard />
      </div>
    </div>
  );
};
