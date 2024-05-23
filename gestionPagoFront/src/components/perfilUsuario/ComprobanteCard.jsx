import { useEffect, useState } from "react";
import { Comprobante } from "../common/Comprobante"; // Asegúrate de que la ruta sea correcta
import "../../assets/css/perfilUsuario/comprobanteCard.css";
import { obtenerComprobantes } from "../../services/ComprobantePago";
import { BsTrashFill } from "react-icons/bs";
console.log(obtenerComprobantes, "Comprobante");
export const ComprobanteCard = () => {
  const informacionCard = [
    {
      id: 1,
      fecha: "2024-05-22",
      ciudad: "Ciudad A",
      nit: "123456789",
      tercero: "Tercero A",
      concepto: "Concepto A",
      banco: "Banco A",
      tipo_cuenta: "Cuenta corriente",
      numero_cuenta: "123456789",
      valor: 100,
    },
    {
      id: 1,
      fecha: "2024-05-22",
      ciudad: "Ciudad A",
      nit: "123456789",
      tercero: "Tercero A",
      concepto: "Concepto A",
      banco: "Banco A",
      tipo_cuenta: "Cuenta corriente",
      numero_cuenta: "123456789",
      valor: 100,
    },
    {
      id: 1,
      fecha: "2024-05-22",
      ciudad: "Ciudad A",
      nit: "123456789",
      tercero: "Tercero A",
      concepto: "Concepto A",
      banco: "Banco A",
      tipo_cuenta: "Cuenta corriente",
      numero_cuenta: "123456789",
      valor: 100,
    },
  ];
  // const [informacionCard, setInformacionCard] = useState([informa]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await obtenerComprobantes();
  //     setInformacionCard(data);
  //   };

  //   getData();
  // }, []);
  //
  //
  // handleSave se pasa como prop a Comprobante.
  // Comprobante llama a handleSave con los datos actualizados del comprobante.
  // handleSave actualiza el estado informacionCard, asegurando que la vista se refresque con los datos más recientes.
  // Esta integración asegura que cualquier edición realizada a un comprobante se refleje correctamente en la interfaz de usuario.

  // const handleSave = (updatedCp) => {
  //   setInformacionCard((prevCards) =>
  //     prevCards.map((card) => (card.id === updatedCp.id ? updatedCp : card))
  //   );
  // };
  return (
    <div className="containerCard py-4   rounded  container mx-auto gap-1 w-full hidden lg:flex  justify-center items-center mb-4">
      {informacionCard.map((transaccion) => (
        <Comprobante
          key={transaccion.id}
          informacionCard={transaccion}
          // onSave={handleSave}
        />
      ))}
    </div>
  );
};
