import React from 'react';
import ReactDOM from 'react-dom/client';
/* Rutas */
import { BrowserRouter } from 'react-router-dom';
/* Components */
// import { HooksApp } from './HooksApp';
import { MainApp } from './components/09-useContext/MainApp';
/* Estilos */
import './index.css';

// RENDER
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
            {/* <HooksApp /> */}
            <MainApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>
);
