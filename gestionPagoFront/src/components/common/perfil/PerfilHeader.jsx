// ProfileHeader.jsx
import React from "react";

export const PerfilHeader = ({ imageSrc, name, profesion }) => {
  return (
    <div className="profile-header my-3">
      <img src={imageSrc} alt="Foto de perfil" className="profile-picture" />
      <h2>{name}</h2>
      <p className="profile-email text-white">{profesion}</p>
    </div>
  );
};
