import React from "react";
import "./PaginaPuntos.css";

export const PaginaPuntos = (props) => {
    return (
        <img
            className="pagina_puntos_img"
            src={`./img/${props.direccionFlecha}-arrow.png`}
            alt="flecha"
        />
    );
};
