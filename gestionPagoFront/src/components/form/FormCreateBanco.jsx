import { DynamicForm } from "../common/DynamicForm";
import * as banco from "../../services/Bonco";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useThemeContext } from "../../userContext/ContextProvider";

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

export const FormCreateBanco = ({ bancoId, onSave }) => {
  // seccion de usercontext
  const { showForm, setShowForm } = useThemeContext();
  const defaultValues = {
    items: [{ nit: "", tipo_cuenta: "Ahorros", nombre_banco: "" }],
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const { reset } = useForm();

  useEffect(() => {
    if (bancoId) {
      banco
        .obtenerBanco(bancoId)
        .then((response) => {
          setFormValues({ items: [response.data] });
          reset({ items: [response.data] });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [bancoId, reset]);

  const handleSubmit = async (data) => {
    console.log(data, "dentro del submit banco");
    // const datos = await banco.crearBanco(data.items[0]);
    try {
      if (bancoId) {
        await banco.editarBanco(data.items[0].nit, bancoId, data.items[0]);
      } else {
        await banco.crearBanco(data.items[0]);
      }
      onSave();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
    setShowForm(false);
  };
  return (
    <DynamicForm
      fieldsConfig={fieldsConfigBanco}
      formTitle={bancoId ? "Editar Banco" : "Crear Bancos"}
      buttonLabel={bancoId ? "Editar" : "Crear Bancos"}
      defaultValues={formValues}
      onSubmit={handleSubmit}
    />
  );
};
