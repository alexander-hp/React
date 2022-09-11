import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// * prop desestructurado, obteniendo value desde componente padre
export default function CounterApp({ value }) {
  // *HOOK - useState
  /*
    ?Aqui estamos utilizando el hook useState 
      ? useState(), en el parametros pasamos que valor va a tomar al inicio
      ? counter = es el valor que le queremos dar
      ? setCouner = el nuevo valor que le quiero asignar
  */
  // ? Los hooks se utilizan normalmente con const para que no se cambier el valor accidentalmente
  const [counter, setCounter] = useState(value);

  // *Ponemos aqui las funciones que queremos se redibujen los datos
  // ? constante que tiene una funcion flecha, es más rapida la func.
  /* 
    ? Podemos recibir el evento de click en este caso, el cual nos
    ? despliega toda la informcaion de click.
  */
  const handleAdd = (event) => {
    // *Evento de click
    // console.log(event);
    // ? estamos diciendo que va a valer 1 mas que antes
    setCounter(counter + 1);
    // ? tambien podemos dar el valor de esta manera
    // setCounter((c) => c + 1);
  };

  // *Restando al valor
  const handleSubtract = (event) => {
    setCounter(counter - 1);
  };

  // * Reseteando valor al que nos da componente padre
  const handleReset = (event) => {
    setCounter(value);
  };

  // *Return de nuestro componente
  return (
    // *Fragment
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      {/* En el boton estamos poniendo el evento click
          en las llaves ponemos codigo js, en este caso una funcion
          que imprime +1, pero esto no es una buena practica
          asi que es mejor sacar esa funcion
      */}
      {/* <button
        onClick={function () {
          console.log('+1');
        }}
      >
        +1
      </button> */}

      {/* 
        Cuando queremos mandar tambien el evento podemos hacerlo asi 
      */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

// *Tipado de props
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

// *Props por default si no recibimos desde componente padre
CounterApp.defaultProps = {
  value: 0,
};
