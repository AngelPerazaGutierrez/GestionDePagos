import React, { useState } from "react";

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
  bancoId,
}) => {
  const methods = useForm({ defaultValues });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({ control, name: "items" });
  const { showForm, setShowForm } = useThemeContext();
  // funcion para mostrar y limpiar el formulario
  const handleShowForm = () => {
    setShowForm(!showForm);
    append();
    reset(defaultValues);
  };
  // funcion que se activa en la funcion de remover
  const handleHideForm = () => {
    setShowForm(false);
    reset(defaultValues);
  };
  // funcion de eliminar formulario
  const handleRemove = (index) => {
    remove(index);
    if (fields.length === 1) {
      handleHideForm();
    }
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
                  onClick={() => handleRemove(index)}
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
