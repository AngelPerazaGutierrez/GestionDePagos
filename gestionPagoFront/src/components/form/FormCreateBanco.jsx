import { DynamicForm } from "../common/DynamicForm";
const fieldsConfigBanco = [
  {
    name: "nit",
    label: "NIT",
    type: "number",
    validation: { required: "NIT es obligatorio" },
  },
  {
    name: "id",
    label: "ID",
    type: "number",
    validation: { required: "ID es obligatorio" },
  },
  {
    name: "tipo_cuenta",
    label: "Tipo de Cuenta",
    type: "text", // Podría ser un select si tienes un enum específico
    validation: { required: "Tipo de cuenta es obligatorio" },
  },
  {
    name: "hombre_banco",
    label: "Nombre del Banco",
    type: "text",
    validation: { required: "Nombre del banco es obligatorio" },
  },
];
export const FormCreateBanco = () => {
  const defaultValues = {
    items: [{ nit: "", id: "", tipo_cuenta: "", nombre_banco: "" }],
  };
  return (
    <DynamicForm
      fieldsConfig={fieldsConfigBanco}
      formTitle="Crear Bancos"
      buttonLabel=" Formulario de los Banco"
      defaultValues={defaultValues}
    />
  );
};
