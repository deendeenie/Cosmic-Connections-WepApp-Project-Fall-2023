import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './CosmicConnectionsApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/cosmic-connections-wepApp-project-fall-2023/"}>
            <App/>
        </BrowserRouter>
  </React.StrictMode>,
)
