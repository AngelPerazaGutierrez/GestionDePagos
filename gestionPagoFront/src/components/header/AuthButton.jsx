import React from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../userContext/ContextProvider";
import "../../assets/css/header/authoBotton.css";
import { ImageComponent } from "../common/ImgComponent";
import img1 from "../../assets/img/perfil.jpeg";
import { CustomButton } from "../common/CustomButton";
export const AuthButton = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, login } = useThemeContext();

  const handleLogout = () => {
    logout();
    navigate("/home");
    alert("login");
  };
  const handleLogin = () => {
    login();
    // navigate("/home");
    // alert("home");
  };
  return (
    isAuthenticated && (
      <div className="  authoButton ">
        <ImageComponent src={img1} className="profile" />
        <CustomButton
          onClick={handleLogout}
          text="Serrar sesion"
          className="p-0"
        />
      </div>
    )
  );
};
