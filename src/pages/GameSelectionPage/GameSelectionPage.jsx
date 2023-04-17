import React, { useState, useEffect } from 'react'
import { GameLayout } from '../../components/Layouts/GameLayout'
import { useNavigate } from 'react-router-dom';
import { useFetchGames } from '../../services/useFetchGames';

export const GameSelectionPage = () => {
    const navigate = useNavigate();
    const { listaJuegos } = useFetchGames();

    const onClickHandler = (target) => {
        navigate("/levels/" + target);
    }

    return (
        <GameLayout texto="Selección de juego">
            {
                listaJuegos.map(juego => {
                    return <div onClick={() => onClickHandler(juego.name)}>{juego.name}</div>
                })
            }
        </GameLayout>
    )
}
