import React from "react";
import { DynamicForm } from "../common/DynamicForm";

import * as egreso from "../../services/ComprobantePago";

const fieldsConfigEgreso = [
  {
    name: "fecha",
    label: "Fecha",
    type: "date",
    validation: { required: "Fecha es obligatoria" },
  },
  {
    name: "ciudad",
    label: "Seleccione la Ciudad",
    type: "select",
    options: [
      { value: "Bogotá", label: "Bogotá" },
      { value: "Medellín", label: "Medellín" },
      { value: "Cali", label: "Cali" },
      { value: "Barranquilla", label: "Barranquilla" },
      { value: "Otras ciudades", label: "Otra ciudad" },
    ],
    validation: { required: "Ciudad es obligatoria" },
  },
  {
    name: "nit",
    label: "NIT/CC",
    type: "number",
    validation: { required: "NIT/CC es obligatorio" },
  },
  {
    name: "tercero",
    label: "Tercero",
    type: "text",
    validation: { required: "Tercero es obligatorio" },
  },
  {
    name: "concepto",
    label: "Por concepto",
    type: "text",
    validation: { required: "Concepto es obligatorio" },
  },

  {
    name: "banco",
    label: "Seleccione el banco",
    type: "select",
    options: [
      { value: "Banco de Bogota", label: "Banco de Bogota" },
      { value: "Davivienda", label: "Davivienda" },
      { value: "Bancolombia", label: "Bancolombia" },
      { value: "BBVA", label: "BBVA" },
      { value: "Banco Popular", label: "Banco Popular" },
      { value: "Nequi", label: "Nequi" },
      { value: "Daviplata", label: "Daviplata" },
      { value: "Otro banco", label: "Otro banco" },
    ],
    validation: { required: "Banco es obligatorio" },
  },
  {
    name: "tipo_cuenta",
    label: "Seleccione tipo de cuenta",
    type: "select",
    options: [
      { value: "Ahorros", label: "Ahorros" },
      { value: "Corriente", label: "Corriente" },
    ],
    validation: { required: "Tipo de cuenta es obligatorio" },
  },
  {
    name: "numero_cuenta",
    label: "Número de cuenta",
    type: "number",
    validation: { required: "Número de cuenta es obligatorio" },
  },
  {
    name: "valor",
    label: "Valor",
    type: "number",
    validation: { required: "Valor es obligatorio" },
  },
  {
    name: "adjuntos",
    label: "Adjuntar archivos en .zip",
    type: "file",
    accept: ".zip",
  },
];

const defaultValuesEgreso = {
  items: [
    {
      fecha: "",
      ciudad: "Bogotá",
      nit: "",
      tercero: "",
      concepto: "",
      descripcion_concepto: "",
      banco: "Banco de Bogota",
      tipo_cuenta: "Ahorros",
      numero_cuenta: "",
      valor: "",
      adjuntos: null,
    },
  ],
};

export const FormCreateIngreso = ({
  initialValues = defaultValuesEgreso,
  onSave,
}) => {
  const handleSubmit = async (data) => {
    try {
      let response;

      if (initialValues.items[0].id) {
        const response = await egreso.editarComprobante(
          initialValues.items[0].id,
          data.items[0]
        );
      } else {
        const datos = await egreso.crearComprobante(data.items[0]);
      }

      onSave(response.data);
    } catch (error) {}
    console.log(data, "dentro del submit ingreso");
    reset("");
  };
  return (
    <div className="w-4">
      <DynamicForm
        fieldsConfig={fieldsConfigEgreso}
        formTitle="Crear ingreso"
        buttonLabel={
          initialValues.items[0].id ? "Editar ingreso" : "Crear ingreso"
        }
        defaultValues={defaultValuesEgreso}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
