import { PropTypes } from "prop-types";

//EL SUBTIPO LO DEBERIAMOS PODER SUSTITUIR CON EL TIPO SIN NINGUN TIPO DE PROBLEMAS

//TIPO
const Button = ({ children, color, size }) => {
  return (
    <button style={{ color, fontSize: size === "xl" ? "32px" : "16px" }}>
      {children}
    </button>
  );
};

//SUBTITULO
const RedButton = ({ children, size }) => (
  <Button size={size}>{children}</Button>
);

//EN ESTE CASO BUTTON ES EL TIPO, Y REDBUTTON ES UN SUBTIPO DE BUTTON

//AL RENDERIZARLOS, PUEDO SUSTITUIR REDBUTTON POR BUTTON Y DEBE FUNCIONAR IGUAL, YA QUE RECIBEN LO MISMO
export const App = () => {
  return (
    <>
      <div>
        <Button size={"xl"}>Mi boton que funciona</Button>
      </div>

      <div>
        <RedButton size={"xl"}>Mi boton que funciona</RedButton>
      </div>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
};

RedButton.propTypes = {
  children: PropTypes.object,
  size: PropTypes.string,
};
