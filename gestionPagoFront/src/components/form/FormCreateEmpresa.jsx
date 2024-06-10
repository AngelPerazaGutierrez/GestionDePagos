import React, { useEffect, useState } from "react";
import { DynamicForm } from "../common/DynamicForm";
import * as empresaService from "../../services/Empresa";

const fieldsConfig = [
  {
    name: "nit",
    label: "NIT",
    type: "number",
    validation: { required: "El NIT es obligatorio" },
  },
  {
    name: "nombre_empresa",
    label: "Nombre de la empresa",
    type: "text",
    validation: { required: "El nombre de la empresa es obligatorio" },
  },
  {
    name: "tipo_cuenta1",
    label: "Tipo de cuenta",
    type: "select",
    options: [
      { value: "Ahorros", label: "Ahorros" },
      { value: "Corriente", label: "Corriente" },
    ],
    validation: { required: "El tipo de cuenta es obligatorio" },
  },
  {
    name: "nombre_banco1",
    label: "Nombre del banco",
    type: "text",
    validation: { required: "El nombre del banco es obligatorio" },
  },
  {
    name: "numero_cuenta1",
    label: "Número de cuenta",
    type: "number",
    validation: { required: "El número de cuenta es obligatorio" },
  },
  {
    name: "ciudad",
    label: "Ciudad",
    type: "text",
    validation: { required: "La ciudad es obligatoria" },
  },
];

const defaultValues = {
  items: [
    {
      nit: "",
      nombre_empresa: "",
      tipo_cuenta1: "",
      nombre_banco1: "",
      numero_cuenta1: "",
      ciudad: "",
    },
  ],
};

export const FormCreateEmpresa = ({ initialvalues, onSave}) => {
  const [formValues, setFormValues] = useState(defaultValues)

  useEffect(() => {
    if (initialValues) {
      setFormValues({ items: [initialValues] });
    }
  }, [initialValues]);

  const handleSubmit = async (data) => {
    if (initialValues) {
      await empresaService.editarEmpresa(initialValues.id, data.items[0]);
    } else {
      await empresaService.crearEmpresa(data.items[0]);
    }
    onSave(data.items[0]);
  };

  return (
    <DynamicForm
      fieldsConfig={fieldsConfig}
      formTitle=""
      buttonLabel={initialValues ? "Editar empresa" : "Crear empresa"}
      defaultValues={formValues}
      onSubmit={handleSubmit}
    />
  );
};
