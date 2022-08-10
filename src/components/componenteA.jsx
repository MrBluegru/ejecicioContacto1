import React from "react";
import ComponenteB from "./componenteB";
import { Contact } from "../models/contact.class";

const ComponenteA = () => {
  const contact = new Contact("Mr. Blue", "Grue", "mrblue@gru.com");

  return (
    <div>
      <h3>Nombre: {contact.name}</h3>
      <h3>Apellido: {contact.surname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>
        <ComponenteB estado={false} />
      </h5>
    </div>
  );
};

export default ComponenteA;
