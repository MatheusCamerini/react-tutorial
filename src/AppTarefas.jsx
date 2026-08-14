import { useState } from "react"
import TarefasLista from "./components/TarefasLista"
import TarefasForm from "./components/TarefasForm"
import "./assets/AppTarefas.css"

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([])
    const addTarefa = (txt) => {
        const today = new Date
        const newTask = {
            id: Date.now(),
            txt,
            data: today.toLocaleDateString('pt-BR')
        }
        setTarefas([...tarefas, newTask])
    }
    const removeTarefa = (id) => {
        setTarefas(tarefas.filter(elem => elem.id !== id))
    }
    const editTarefa = (id, newTxt) => {
        setTarefas(tarefas.map((tarefa) => (tarefa.id === id ? { ...tarefa, txt: newTxt } : tarefa)))
    }
    return (
        <div className="app-card">
            <h1>Keepão</h1>
            <TarefasForm onAddTarefa={addTarefa} />
            <TarefasLista tarefas={tarefas} onRemoveTarefas={removeTarefa} editTarefa={editTarefa} />
        </div>
    )
}
export default AppTarefas