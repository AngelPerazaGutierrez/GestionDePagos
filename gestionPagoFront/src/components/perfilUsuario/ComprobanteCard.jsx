import { useEffect, useState } from "react";
import { Comprobante } from "../common/Comprobante"; // Asegúrate de que la ruta sea correcta
import "../../assets/css/perfilUsuario/comprobanteCard.css";
import { odtenerComprobantes } from "../../services/ComprobantePago";
import { BsTrashFill } from "react-icons/bs";
console.log(odtenerComprobantes, "Comprobante");
export const ComprobanteCard = () => {
    const [informacionCard, setInformacionCard] = useState([]);

  // const informacionCard = [
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     tercero: "Tercero A",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     numero_cuenta: "123456789",
  //     valor: 100,
  //   },
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     tercero: "Tercero A",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     numero_cuenta: "123456789",
  //     valor: 100,
  //   },
  //   {
  //     id: 1,
  //     fecha: "2024-05-22",
  //     ciudad: "Ciudad A",
  //     nit: "123456789",
  //     tercero: "Tercero A",
  //     concepto: "Concepto A",
  //     banco: "Banco A",
  //     tipo_cuenta: "Cuenta corriente",
  //     numero_cuenta: "123456789",
  //     valor: 100,
  //   },
  // ];

    useEffect(() => {
      const getData = async () => {
        const data = await odtenerComprobantes();
        setInformacionCard(data);
      };

      getData();
    }, []);
  return (
    <div className="containerCard py-4   rounded  container mx-auto gap-1 w-full hidden lg:flex  justify-center items-center mb-4">
      {informacionCard.map((transaccion) => (
        <Comprobante key={transaccion.id} informacionCard={transaccion} />
      ))}
    </div>
  );
};
