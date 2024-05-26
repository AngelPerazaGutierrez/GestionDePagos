import { DynamicForm } from "../common/DynamicForm";
import * as banco from "../../services/Bonco";
import { useState } from "react";
const fieldsConfigBanco = [
  {
    name: "nit",
    label: "NIT",
    type: "number",
    validation: { required: "NIT es obligatorio" },
  },
  {
    name: "tipo_cuenta",
    label: "Tipo de Cuenta",
    type: "select",
    options: [
      { value: "Ahorros", label: "Ahorros" },
      { value: "Corriente", label: "Corriente" },
    ],
    validation: { required: "Tipo de cuenta es obligatorio" },
  },
  {
    name_banco: "hombre_banco",
    label: "Nombre del Banco",
    type: "text",
    validation: { required: "Nombre del banco es obligatorio" },
  },
];

export const FormCreateBanco = () => {
  const defaultValues = {
    items: [{ nit: "", tipo_cuenta: "Ahorro", nombre_banco: "" }],
  };
  const handleSubmit = async (data) => {
    console.log(data, "dentro del submit banco");
    const datos = await banco.crearBanco(data.items[0]);
    reset("");
  };
  return (
    <DynamicForm
      fieldsConfig={fieldsConfigBanco}
      formTitle="Crear Bancos"
      buttonLabel=" Formulario de los Banco"
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      // bancoId={bancoId}
    />
  );
};
