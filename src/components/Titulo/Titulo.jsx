import "./Titulo.css";

export const Titulo = (props) => {
  const style = { textAlign: props.posicion };

  return (
    <h1 style={style} className="titulo">
      {props.texto}
    </h1>
  );
};
