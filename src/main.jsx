import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTarefas from './AppTarefas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.0/css/all.min.css" integrity="sha512-ApSLB1Pd3/bZN8fWB/RG9YhN/7bd9Hkf3AGaE2mPfebjrxagjuBtx2GcgdqIlJkUzwylBo61r9Xa9NmgBI0swA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <AppTarefas />
  </StrictMode>,
)
