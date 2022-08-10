import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponenteB = (estado) => {
  
  const [conected, setConected] = useState(estado);

  return (
    <div>
      <h4>
        {conected === false ? "Contacto En Línea" : "Contacto No Disponible"}
      </h4>
      <button onClick={() => setConected(!conected)}>
        {conected === false ? "Offline" : "Online"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;
