// ? Para renderizar la app
import React from 'react';
import ReactDOM from 'react-dom/client';

// ?importamos el componente o funcion app de helloWorld
// import { App, hola } from './HelloWorldApp';
// import App from './HelloWorldApp';

import { HelloWorldApp } from './HelloWorldApp';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

// *Importando css
import './index.css';

// ? Renderizamos en index.html obteniendo el id root
ReactDOM.createRoot(document.getElementById('root')).render(
  // ? Vamos a renderizar app en modo estricto
  <React.StrictMode>
    {/* <HelloWorldApp /> */}

    {/* Aqui estamos mandando las props */}
    {/* si es que solo especificamos el campo entonces pasara como boolean 
        ejemplo: boolean
    */}
    {/* <FirstApp title="titulo asignado desde main" number={12} boolean /> */}
    <FirstApp />

    {/* Componente padre que envia valor 1 en props */}
    {/* <CounterApp value={1} /> */}
  </React.StrictMode>
);
