import { Titulo } from "../../components/Titulo/Titulo";
import { CajaPuntos } from "../../components/CajaPuntos/CajaPuntos";
import { Separador } from "../../components/Separador/Separador";
import { Boton } from "../../components/Boton/Boton";
import { useHistory } from "react-router-dom";

const PuntuacionPage = () => {
    let history = useHistory();
    const style = { backgroundColor: "gray", height: "100%", width: "100%" };

    const navigateToJuegoPage = () => {
        history.push("juego");
    };

    return (
        <div style={style} className="puntuacion_page">
            <Titulo posicion="center" texto="React Aracade"></Titulo>
            <Separador size={3}></Separador>
            <CajaPuntos></CajaPuntos>
            <Separador size={3}></Separador>
            <Boton onClick={navigateToJuegoPage} texto="Jugar"></Boton>
        </div>
    );
};

export default PuntuacionPage;
