import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTarefas from './AppTarefas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTarefas />
  </StrictMode>,
)
