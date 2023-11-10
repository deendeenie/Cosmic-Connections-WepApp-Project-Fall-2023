import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './CosmicConnectionsApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Cosmic-Connections-WepApp-Project-Fall-2023/"}>
            <App />
        </BrowserRouter>
  </React.StrictMode>,
)
