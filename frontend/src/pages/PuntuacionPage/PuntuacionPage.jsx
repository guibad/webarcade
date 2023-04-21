import { useNavigate } from "react-router-dom";
import { Boton } from "../../components/Boton/Boton";
import { CajaPuntos } from "../../components/CajaPuntos/CajaPuntos";
import { GameLayout } from "../../components/Layouts/GameLayout";
import { Separador } from "../../components/Separador/Separador";

const PuntuacionPage = () => {
    const navigate = useNavigate();

    const navigateToJuegoPage = () => {
        navigate('/juego');
    }

    return (
        <GameLayout texto="PuntuaciónPage">
            <CajaPuntos />
            <Separador size={3} />
            <Boton onClick={navigateToJuegoPage} texto="Jugar" />
        </GameLayout>
    );
};

export default PuntuacionPage;
