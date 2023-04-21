import React from "react";
import { DefaultImage } from "../DefaultImage/DefaultImage";

export const PaginaPuntos = (props) => {
    return (
        <DefaultImage src={`./img/${props.direccionFlecha}-arrow.png`}
            alt="Botón para cargar más puntuación."
        />
    );
};
