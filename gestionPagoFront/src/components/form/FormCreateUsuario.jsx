import { DynamicForm } from "../common/DynamicForm";
import React from "react";
import * as usuario from "../../services/RegistroUsuario"

const fieldsConfigUsuario = [
  {
    name: "cedula",
    label: "Cédula",
    type: "number",
    validation: { required: "Cédula es obligatoria" },
  },
  {
    name: "nombre",
    label: "Nombre",
    type: "text",
    validation: { required: "Nombre es obligatorio" },
  },
  {
    name: "apellido",
    label: "Apellido",
    type: "text",
    validation: { required: "Apellido es obligatorio" },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: { required: "Email es obligatorio" },
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    validation: { required: "Contraseña es obligatoria" },
  },
  {
    name: "fecha_creacion",
    label: "Fecha de Creación",
    type: "date",
    validation: { required: "Fecha de creación es obligatoria" },
  },
  {
    name: "proceso",
    label: "Proceso",
    type: "select",
    options: [
      { value: "Financiera", label: "Financiera" },
      { value: "Gerencia", label: "Gerencia" },
      { value: "Nomina", label: "Nomina" },
      { value: "Tesoreria", label: "Tesoreria"},
      { value: "Administrador", label: "Administrador"},
    ],
    validation: { required: "Proceso es obligatorio" },
  },
];

const defaultValuesUsuario = {
  items: [
    {
      cedula: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      fecha_creacion: "",
      proceso: "",
    },
  ],
};


export const FormCreateUsuario = ({ 
  initialValues = defaultValuesUsuario, 
  onSave,
}) => {  
  const handleSubmit = async (data) => {
    try {
      let response;

      if (initialValues.items[0].id) {
        const response = await usuario.editarUsuario(
          initialValues.items[0].id,
          data.items[0]
        );
      } else {
        const datos = await usuario.crearUsuario(data.items[0]);
      }

      onSave(response.data);
    } catch (error) {}
    console.log(data, "dentro del submit usuario");
    reset("");
  };
  return (
    <div className="w-4">
      <DynamicForm
        fieldsConfig={fieldsConfigUsuario}
        formTitle=""
        buttonLabel={
          initialValues.items[0].id ? "Editar usuario" : "Crear usuario"
        }
        defaultValues={defaultValuesUsuario}
        onSubmit={handleSubmit}
      />
    </div>
  );
};


