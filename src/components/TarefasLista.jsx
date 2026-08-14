import "../assets/TarefasLista.css"
import TarefasItem from "./TarefasItem"
const TarefasLista = ({ tarefas, onRemoveTarefas, editTarefa }) => {
    return (
        <ul className="tarefas-lista">
            {
                tarefas.length > 0 ? (
                    tarefas.map((i) => {
                        return <TarefasItem key={i.id} tarefa={i} editTarefa={editTarefa} onRemoveTarefas={onRemoveTarefas}/>
                    })
                ) : (
                    <span className="mensagem-vazia">Não há tarefas</span>
                )
            }
        </ul>
    )
}
export default TarefasLista