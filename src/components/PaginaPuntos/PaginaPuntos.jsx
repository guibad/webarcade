import React, { useState } from "react";
import "./PaginaPuntos.css";

export const PaginaPuntos = (props) => {
    const [active, setActive] = useState(false);
    const activeClass = active
        ? "pagina_puntos_img_activa"
        : "pagina_puntos_img";

    const onMouseEnterHandler = () => {
        setActive(true);
    };

    const onMouseLeaveHandler = () => {
        setActive(false);
    };

    return (
        <img
            className={activeClass}
            src={`./img/${props.direccionFlecha}-arrow.png`}
            alt="Boton para cargar más puntuación"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        />
    );
};
