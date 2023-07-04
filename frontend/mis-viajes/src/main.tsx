import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from './context/GlobalContext.tsx'
///Users/carlosaraiza/Desktop/Projects/mis-viajes/frontend/mis-viajes/context/GlobalContext.tsx

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
