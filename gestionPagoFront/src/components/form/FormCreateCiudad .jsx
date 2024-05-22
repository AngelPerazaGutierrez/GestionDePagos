import { DynamicForm } from "../common/DynamicForm";
import * as ciudad from "../../services/Ciudad";
console.log(ciudad, "ciudad");
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

  const handleSubmit = async (data) => {
    console.log(data, "dentro del submit ciudad");
    const datos = await ciudad.crearCiudad(data.items[0]);
  };
  return (
    <>
      <DynamicForm
        fieldsConfig={fieldsConfig}
        formTitle="Crear ciudades"
        buttonLabel=" Formulario de ciudades"
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
      />
    </>
  );
};
