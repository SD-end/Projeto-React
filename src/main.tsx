import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LivrosProvider } from './context/LivrosProvider'
import './Styles/estilo.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LivrosProvider>
      <App />
    </LivrosProvider>
  </StrictMode>,
)
