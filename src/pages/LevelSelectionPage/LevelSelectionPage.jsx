import React, { useState, useEffect } from 'react'
import { GameLayout } from '../../components/Layouts/GameLayout'
import { useParams } from 'react-router-dom';
import { useFetchGames } from '../../services/useFetchGames';

export const LevelSelectionPage = () => {
    const { game } = useParams();
    const { listaJuegos } = useFetchGames();

    const gameInList = listaJuegos.filter(elem => {
        return elem.name === game;
    })

    if (gameInList > 0) {
        return (
            <GameLayout texto="Selección de nivel">
                {
                    gameInList[0].levels.map(level => {
                        return <div>Size: {level.size} Words: {level.nwords}</div>
                    })
                }
            </GameLayout>
        )
    }

}
