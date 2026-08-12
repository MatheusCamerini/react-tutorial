import { useState } from "react"
import "../assets/TarefasForm.css"

const TarefasForm = ({ onAddTarefa }) => {
    const [tarefa, setTarefa] = useState('')
    const onChangeT = (e) => {
        setTarefa(e.target.value)
    }
    const onSubmitF = (e) => {
        e.preventDefault()
        if (tarefa.trim()) {
            onAddTarefa(tarefa)
            setTarefa('')
        }
    }

    return (
        <form onSubmit={onSubmitF} className="tarefas-form">
            <input type="text" value={tarefa} placeholder="Digite sua tarefa" onChange={onChangeT} />
            <button type="submit">Adicionar</button>
        </form>
    )
}
export default TarefasForm