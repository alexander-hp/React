// TODO si es que la variable no va a cambiar de valor
// TODO o esta asociada a algun hook entonces no debe de ir en
// TODO el functionalcomponent, osea no dentro de la function
const newMessage = [1, 2, 3, 4, 5];

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
export default function FirstApp({ title }) {
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
      <h2> Props: {title} </h2>
      <p>Soy un parrafo</p>
    </>
  );
}
