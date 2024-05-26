import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../common/CustomButton";

import { useState } from "react";

import { useThemeContext } from "../../userContext/ContextProvider.jsx";

export const SignIn = () => {
  const navigate = useNavigate();
  const { selectedOption, setSelectedOption, login } = useThemeContext();
  // const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "", label: "Seleccione usuario" },
    { value: "Usuarios", label: "Usuarios" },
    { value: "Administrador", label: "Administrador" },
    { value: "contador", label: "Contador" },
  ];
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    login();
    reset();
    // navigation("/login");
    navigate("/login");
  };
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  return (
    <div className="shadow formCss">
      <div className="d-block bg-white p-4 ">
        <div className=" d-flex gap-2 justify-content-around borde mb-5 text-center">
          <p className="fw-bold fs-2">Financial</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
          <>
            <div>
              <select
                value={selectedOption}
                onChange={handleChange}
                className={`form-control mb-3 ${
                  errors.loginEmail ? "is-invalid" : ""
                }`}
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    placeholder="Seleccione usuario"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <input
              placeholder="Correo electrónico"
              {...register("loginEmail", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    "Introduce un correo electrónico válido eje@gmail.com",
                },
              })}
              className={`form-control mb-3 ${
                errors.loginEmail ? "is-invalid" : ""
              }`}
            />
            {errors.loginEmail && (
              <span className="invalid-feedback">
                {errors.loginEmail.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Contraseña"
              {...register("loginPassword", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
              className={`form-control mb-3 ${
                errors.loginPassword ? "is-invalid" : ""
              }`}
            />
            {errors.loginPassword && (
              <span className="invalid-feedback">
                {errors.loginPassword.message}
              </span>
            )}
          </>

          <div className="d-flex justify-content-center mb-3">
            <CustomButton text="Iniciar sesión" className="" />
          </div>
        </form>
      </div>
    </div>
  );
};
