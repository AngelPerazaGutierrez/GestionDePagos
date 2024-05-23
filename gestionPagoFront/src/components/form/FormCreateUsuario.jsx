import { DynamicForm } from "../common/DynamicForm";
import * as user from "../../services/RegistroUsuario";
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
      { value: "Tesoreria", label: "Tesoreria" },
    ],    
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
  const handleSubmit = async (data) => {
    console.log(data, "dentro del usuario");
    const datos = await user.registroUsuario(data.items[0]);
  };
  return (
    <DynamicForm
      fieldsConfig={fieldsConfigUsuario}
      formTitle="Crear Usuario"
      button="Crear Usuario"
      buttonLabel="Formulario de usuario"
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
};
