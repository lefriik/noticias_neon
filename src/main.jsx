import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/* 

  DOWNGRADE REACT 18 A 17

  modificar las dependencias del package.json de esta forma:

  "devDependencies": {
      "@types/react": "^17.0.2",
      "@types/react-dom": "^17.0.2",
      "@vitejs/plugin-react": "^1.3.0",
      "vite": "^2.9.5"
    },
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    }
  Ahora vamos a /src/main.jsx y reemplazamos todo su contenido de esta forma:

  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  Y abría que eliminar la carpeta node_modules y volver a instalar todo con npm install


*/


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);