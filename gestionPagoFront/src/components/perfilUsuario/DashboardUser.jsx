import "./css/dashboar.css";
import { Container, Row, Col } from "react-bootstrap";

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
    <Container>
      <div className="profile-container shadow">
        <Row>
          <Col xs={12} md={12}>
            <div className=" my-3 d-flex flex-column  align-items-center ">
              <img
                src="https://placehold.co/200x200"
                alt="Profile picture"
                className="profile-picture  "
              />
              <div className="namePerfil">
                <h2>Julian</h2>
                <p className=" text-white">Profesión</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <nav>
              {pages.map((page) => (
                <div className="mb-4" key={page.id}>
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
          </Col>
        </Row>
      </div>
    </Container>
  );
};
