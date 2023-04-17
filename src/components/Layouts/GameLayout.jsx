import React from 'react';
import { Titulo } from '../Titulo/Titulo';
import { DefaultImage } from '../DefaultImage/DefaultImage';
import imagenes from '../../config/imagenes.json';
import { Separador } from '../Separador/Separador';

export const GameLayout = (props) => {
    const style = { backgroundColor: "gray", height: "100%", width: "100%" };


    return (
        <div style={style} className="puntuacion_page">
            <div className="game_layout_header">
                <DefaultImage {...imagenes.flecha} />
                <Titulo posicion="center" texto={props.texto}></Titulo>
            </div>
            <div className="game_layout_body">
                <Separador size={3} />
                {props.children}
            </div>
            <div className="game_layout_footer">

            </div>

            <div>Barra inferior</div>
        </div>
    )
}
