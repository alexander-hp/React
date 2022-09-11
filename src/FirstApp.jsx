// TODO si es que la variable no va a cambiar de valor
// TODO o esta asociada a algun hook entonces no debe de ir en
// TODO el functionalcomponent, osea no dentro de la function
const newMessage = [1, 2, 3, 4, 5];

// ?Importacion para las props
import PropTypes from 'prop-types';

// ? Como imprimir un objeto
const message = {
  title: 'Titulo del objeto',
  message: 'mensaje obj',
};

// ? devolvemos un mensaje en una funcion
function getMessage() {
  return 'Mensaje obtenido';
}

const getSuma = (a, b) => {
  return a + b;
};

// ? en el parametro estamos recibiendo las props ya desestructurada
/* 
    ? si es que nosotros asignamos a algo en las props entonces saldra 
    ?  si es que no esta recibiendo ese campo las props, 
    ? pero si ya las tenia antes entonces saldra las que tenia asignadas 
  */
export default function FirstApp({ title, subtitle, number, boolean }) {
  return (
    // ? esto sustituye al fragment para no anidar codigo a otro div
    // ? el cual podria estropear los estilos que tenemos: <>
    <>
      <h1>Alexander</h1>
      {/* Podemos poner js o variables aqui todo a excepcion de un objeto */}
      <h2> {12 * 15} </h2>
      <h2> {newMessage} </h2>
      <h2> {JSON.stringify(message)} </h2>
      <h2> {getMessage()} </h2>
      <h2> {getSuma(12, 15)} </h2>
      {/* Las Props es el contexto al que se le pasa un componente */}
      <h2> Props.title: {title} </h2>
      <h2> Props.subtitle: {subtitle} </h2>
      <h2> Props.number: {number + 1} </h2>
      {/* ?Aqui no aparecera, aunque en consola pasa como true */}
      <h2> Props.boolean: {boolean} </h2>
      <p>Soy un parrafo</p>
    </>
  );
}

// *Estamos especificando el tipo de las props
FirstApp.propTypes = {
  // ? si queremos especificar el tipo y que sea obligatorio:
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.number,
};

// *Poniendo el valor que tendran por defecto los props
FirstApp.defaultProps = {
  title: 'Si no esta asignado',
  subtitle: 'asignado desde funcion',
};
