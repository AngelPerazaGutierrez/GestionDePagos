import React from "react";

import { FormCreateBanco } from "../components/form/FormCreateBanco";
import { FormCreateUsuario } from "../components/form/FormCreateUsuario";
import { FormCreateCiudad } from "../components/form/FormCreateCiudad ";

export const AdminPage = () => {
  return (
    <div
      className="justify-content-center align-items-center"
      style={{ height: "100vh", marginTop: "100" }}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate,
      vero corrupti eligendi porro fuga suscipit labore aspernatur nulla
      voluptatem cum est doloribus placeat laborum deleniti, magni sapiente
      voluptatum at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
      ipsa necessitatibus itaque, laudantium cumque quo quae accusantium?
      Deleniti quasi ipsa dolores exercitationem voluptate, eligendi, quod
      numquam cupiditate, aliquid cum et! Esse optio qui laudantium ipsum ullam
      inventore fuga harum. Inventore, maiores. Veritatis expedita soluta quas
      eveniet eaque, explicabo repellat velit reiciendis itaque placeat nostrum
      atque fuga consequatur veniam neque? Assumenda? Rem exercitationem et
      perspiciatis architecto ab in dolorem magnam voluptate consequuntur
      eveniet. Similique ratione odit atque distinctio iste eos labore
      perspiciatis omnis, quod, error iure impedit! Id exercitationem fugit
      nihil. Illo inventore reiciendis harum accusantium sed facilis nihil
      possimus deleniti ipsum tempora voluptatibus porro iusto, voluptatem vero
      asperiores unde. Repudiandae ex repellat, in eius blanditiis corporis modi
      quibusdam nobis! Eos? Quaerat amet, harum natus, laborum ducimus unde aut
      molestias eius possimus distinctio nemo atque nihil. Iure blanditiis
      maiores, atque doloremque fuga sint illum voluptatum quis sed cupiditate
      fugit veritatis alias. Inventore nemo optio consectetur maxime earum cum
      in odio officia asperiores iste deleniti, laboriosam accusamus quod quo
      nam. Ipsa vel et aliquid commodi sunt labore consequatur sint maiores
      d-flex-container repudiandae odit.
      <div className=" container d-flex justify-content-between">
        <FormCreateBanco />
        <FormCreateUsuario />
        <FormCreateCiudad />
      </div>
    </div>
  );
};
