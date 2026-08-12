import { useState } from "react"
import TarefasLista from "./components/TarefasLista"
import TarefasForm from "./components/TarefasForm"
import "./assets/AppTarefas.css"

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([])
    const addTarefa = (txt) => {
        const newTask = {
            id: Date.now(),
            txt,
        }
        setTarefas([...tarefas, newTask])
    }
    const removeTarefa = (id) => {
        setTarefas(tarefas.filter((elem) => elem.id !== id))
    }
    return (
        <div className="app-card">
            <h1>Keepão</h1>
            <TarefasForm onAddTarefa={addTarefa} />
            <TarefasLista tarefas={tarefas} onRemoveTarefas={removeTarefa} />
        </div>
    )
}
export default AppTarefas