import React from "react";
import { ListaPuntuaciones } from "../ListaPuntuaciones/ListaPuntuaciones";
import { PaginaPuntos } from "../PaginaPuntos/PaginaPuntos";
import "./CajaPuntos.css";

export const CajaPuntos = () => {
    const puntuaciones = [
        {
            puntos: 1500,
            iniciales: "JCH",
        },
        {
            puntos: 1600,
            iniciales: "GBB",
        },
        {
            puntos: 1500,
            iniciales: "SRR",
        },
        {
            puntos: 1500,
            iniciales: "SRR",
        },
    ];

    return (
        <div className="caja_puntos_container">
            <div className="caja_puntos_columna_1">
                <PaginaPuntos direccionFlecha="left" />
            </div>
            <div className="caja_puntos_columna_2">
                <ListaPuntuaciones puntuaciones={puntuaciones} />
            </div>
            <div className="caja_puntos_columna_3">
                <PaginaPuntos direccionFlecha="right" />
            </div>
        </div>
    );
};
