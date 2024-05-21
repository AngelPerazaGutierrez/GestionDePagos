import { DynamicForm } from "../common/DynamicForm";
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
    type: "text", // Podría ser un select si tienes un enum específico
    validation: { required: "Proceso es obligatorio" },
  },
];
export const FormCreateUsuario = () => {
  const defaultValues = {
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
  return (
    <DynamicForm
      fieldsConfig={fieldsConfigUsuario}
      formTitle="Crear Usuario"
      button="Crear Usuario"
      buttonLabel="Formulario de usuario"
      defaultValues={defaultValues}
    />
  );
};
