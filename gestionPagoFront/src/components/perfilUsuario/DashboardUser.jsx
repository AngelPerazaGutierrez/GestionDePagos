import "./css/dashboar.css";

import { BsEyeFill, BsPersonFill, BsJustify } from "react-icons/bs";
import { CustomButton } from "../common/CustomButton";
import { useThemeContext } from "../../userContext/ContextProvider";
export const DashboardUser = () => {
  const { selectedPage, setSelectedPage, setshowPagesProfile } =
    useThemeContext();

  const handledPagesSelect = (page) => {
    setSelectedPage(page.name);
    console.log(page.name);
    setshowPagesProfile(true);
  };

  const pages = [
    {
      id: 1,
      name: "Perfil usuario",
      icon: <BsPersonFill className="fs-3 p-" style={{ flex: "" }} />,
    },
    {
      id: 2,
      name: "Crear comprobante de pago",
      icon: <BsJustify className="fs-3 m-2" />,
    },
    {
      id: 3,
      name: "Visualizar comprobantes de pago",
      icon: <BsEyeFill className="fs-3 m-2 " />,
    },
  ];

  return (
    <div className="profile-container shadow">
      <div className="profile-header my-3">
        <img
          src="https://placehold.co/200x200"
          alt="Profile picture"
          className="profile-picture"
        />
        <h2>Julian</h2>
        <p className="profile-email text-white">Profesión</p>
      </div>
      <nav>
        {pages.map((page) => (
          <div className=" mb-4" key={page.id}>
            <CustomButton
              text={page.name}
              className=""
              icon={page.icon}
              setSelected={setSelectedPage}
              onClick={() => handledPagesSelect(page)}
            />
          </div>
        ))}
      </nav>
    </div>
  );
};
