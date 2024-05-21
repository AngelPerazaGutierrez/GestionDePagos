import { DynamicForm } from "../common/DynamicForm";
const fieldsConfig = [
  {
    name: "pais",
    label: "País",
    type: "text",
    validation: { required: "País es obligatorio" },
  },
  {
    name: "ciudad",
    label: "Ciudad",
    type: "text",
    validation: { required: "Ciudad es obligatoria" },
  },
];

export const FormCreateCiudad = () => {
  const defaultValues = { items: [{ pais: "Colombia", ciudad: "" }] };
  return (
    <div>
      <DynamicForm
        fieldsConfig={fieldsConfig}
        formTitle="Crear ciudades"
        buttonLabel=" Formulario de ciudades"
        defaultValues={defaultValues}
      />
    </div>
  );
};
