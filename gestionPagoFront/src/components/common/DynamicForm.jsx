// import * as egreso from "../../services/areaPagos/getchCpsPendie";
import React, { useState, useEffect } from "react";

import {
  useForm,
  useFieldArray,
  FormProvider,
  Controller,
} from "react-hook-form";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { useThemeContext } from "../../userContext/ContextProvider";

export const DynamicForm = ({
  fieldsConfig,
  formTitle,
  defaultValues,
  buttonLabel,
  onSubmit,
  bancoId
}) => {
  const methods = useForm({ defaultValues });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const { setDataForm, DataForm } = useThemeContext();
  // const onSubmit = async (data) => {
  //   setDataForm(data);
  //   // console.log(data);
  //   // const datos = await egreso.crearComprobante(data.items[0]);
  //   // console.log(data, "hola");
  // };

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <Container className="form-container">
      <p className="form-title">{formTitle}</p>
      <FormProvider {...methods}>
        {showForm ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <div key={field.id}>
                {fieldsConfig.map(
                  ({ name, label, type, validation, options }) => (
                    <FormGroup key={name}>
                      <FormLabel>{label}</FormLabel>
                      <Controller
                        name={`items.${index}.${name}`}
                        control={control}
                        rules={validation}
                        render={({ field }) => {
                          if (type === "select") {
                            return (
                              <Form.Control
                                as="select"
                                {...field}
                                isInvalid={!!errors.items?.[index]?.[name]}
                                className="form-input"
                              >
                                {options.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </Form.Control>
                            );
                          } else if (type === "textarea") {
                            return (
                              <FormControl
                                as="textarea"
                                // rows={3}
                                {...field}
                                isInvalid={!!errors.items?.[index]?.[name]}
                                className="form-input"
                              />
                            );
                          } else {
                            return (
                              <FormControl
                                type={type}
                                {...field}
                                isInvalid={!!errors.items?.[index]?.[name]}
                                className="form-input"
                              />
                            );
                          }
                        }}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.items?.[index]?.[name]?.message}
                      </FormControl.Feedback>
                    </FormGroup>
                  )
                )}
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => remove(index)}
                >
                  Eliminar
                </Button>
                <hr />
              </div>
            ))}

            <Button type="submit" variant="primary" className="submit-button">
              Guardar
            </Button>
          </Form>
        ) : (
          <Button type="button" variant="secondary" onClick={handleShowForm}>
            {buttonLabel}
          </Button>
        )}
      </FormProvider>
    </Container>
  );
};
