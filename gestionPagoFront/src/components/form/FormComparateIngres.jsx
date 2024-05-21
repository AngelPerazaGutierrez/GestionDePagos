// // import "../../assets/css/form/FormCrearComprobante.css";
// import React from "react";
// import { useForm } from "react-hook-form";
// import {
//   Button,
//   Container,
//   Form,
//   FormControl,
//   FormGroup,
//   FormLabel,
// } from "react-bootstrap";

// export const FormComparateIngres = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       fecha: "",
//       ciudad: "Bogotá",
//       nit: "",
//       tercero: "",
//       concepto: "",
//       descripcion_concepto: "",
//       banco: "Banco de Bogota",
//       tipo_cuenta: "Ahorros",
//       numero_cuenta: "",
//       valor: "",
//       adjuntos: null,
//     },
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Container className="contain">
//       <h5>Comprobante de Egreso Virtual</h5>
//       <Form onSubmit={handleSubmit(onSubmit)} className="containers">
//         <FormGroup className="form">
//           <FormLabel>Fecha</FormLabel>
//           <FormControl
//             type="date"
//             {...register("fecha", { required: "Fecha es obligatoria" })}
//             isInvalid={!!errors.fecha}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.fecha?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Selecione la Ciudad</FormLabel>

//           <Form.Select
//             aria-label="Default select example"
//             {...register("ciudad", { required: "Ciudad es obligatoria" })}
//             isInvalid={!!errors.ciudad}
//             defaultValue="Bogotá"
//           >
//             <option value="Bogota" selected>
//               Bogotá
//             </option>
//             <option value="Medellin">Medellín</option>
//             <option value="Cali">Cali</option>
//             <option value="Barranquilla">Barranquilla</option>
//             <option value="Otras ciudades">Otra ciudad</option>
//           </Form.Select>

//           {/* <FormControl.Feedback type="invalid">
//             {errors.ciudad?.message}
//           </FormControl.Feedback> */}
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>NIT/CC</FormLabel>
//           <FormControl
//             type="number"
//             {...register("nit", { required: "NIT/CC es obligatorio" })}
//             isInvalid={!!errors.nit}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.nit?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Tercero</FormLabel>
//           <FormControl
//             type="number"
//             {...register("tercero", { required: "Tercero es obligatorio" })}
//             isInvalid={!!errors.tercero}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.tercero?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Por concepto</FormLabel>
//           <FormControl
//             type="text"
//             {...register("concepto", { required: "Concepto es obligatorio" })}
//             isInvalid={!!errors.concepto}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.concepto?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Descripción del concepto</FormLabel>
//           <FormControl
//             as="textarea"
//             rows={3}
//             {...register("descripcion_concepto", {
//               required: "Descripción del concepto es obligatoria",
//             })}
//             isInvalid={!!errors.descripcion_concepto}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.descripcion_concepto?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Banco</FormLabel>
//           <Form.Select
//             {...register("banco", { required: "Banco es obligatorio" })}
//             isInvalid={!!errors.banco}
//           >
//             <option value="Banco_bogota" selected>
//               Banco de Bogota
//             </option>
//             <option value="Davivienda">Davivienda</option>
//             <option value="Bancolombia">Bancolombia</option>
//             <option value="BBVA">BBVA</option>
//             <option value="Banco_popular">Banco Popular</option>
//             <option value="Nequi">Nequi</option>
//             <option value="Daviplata">Daviplata</option>
//             <option value="Otro_banco">Otro banco</option>
//           </Form.Select>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Tipo de cuenta</FormLabel>
//           <Form.Select
//             {...register("cuenta", { required: "cuenta es obligatorio" })}
//             isInvalid={!!errors.banco}
//           >
//             <option value="ahorros" selected>
//               Ahorros
//             </option>
//             <option value="corriente">Corriente</option>
//           </Form.Select>

//           <FormControl.Feedback type="invalid">
//             {errors.tipo_cuenta?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Número de Cuenta</FormLabel>
//           <FormControl
//             type="number"
//             {...register("numero_cuenta", {
//               required: "Número de cuenta es obligatorio",
//             })}
//             isInvalid={!!errors.numero_cuenta}
//           />
//           <FormControl.Feedback type="number">
//             {errors.numero_cuenta?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Valor</FormLabel>
//           <FormControl
//             type="number"
//             {...register("valor", { required: "Valor es obligatorio" })}
//             isInvalid={!!errors.valor}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.valor?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <FormGroup className="form">
//           <FormLabel>Adjuntar archivos en .zip</FormLabel>
//           <FormControl
//             type="file"
//             accept=".zip"
//             {...register("adjuntos", { required: "Adjuntos es obligatorio" })}
//             isInvalid={!!errors.adjuntos}
//           />
//           <FormControl.Feedback type="invalid">
//             {errors.adjuntos?.message}
//           </FormControl.Feedback>
//         </FormGroup>

//         <Button type="submit" variant="primary" className="submit-button">
//           Guardar y Enviar
//         </Button>
//       </Form>
//     </Container>
//   );
// };
