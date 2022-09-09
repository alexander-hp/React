// ? Para renderizar la app
import React from 'react';
import ReactDOM from 'react-dom/client';

// ?importamos el componente o funcion app de helloWorld
// import { App, hola } from './HelloWorldApp';
// import App from './HelloWorldApp';

import { HelloWorldApp } from './HelloWorldApp';
import FirstApp from './FirstApp';

import './index.css';

// ? Renderizamos en index.html obteniendo el id root
ReactDOM.createRoot(document.getElementById('root')).render(
  // ? Vamos a renderizar app en modo estricto
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp />
  </React.StrictMode>
);
