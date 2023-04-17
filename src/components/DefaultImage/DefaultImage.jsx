import React, { useState } from 'react'
import "./DefaultImage.css";

export const DefaultImage = (props) => {
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
            onClick={props.onClick}
            className={activeClass}
            src={props.src}
            alt={props.alt}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        />
    )
}
