import "../assets/TarefasLista.css"

const TarefasLista = ({ tarefas, onRemoveTarefas }) => {
    return (
        <ul className="tarefas-lista">
            {
                tarefas.length > 0 ? (
                    tarefas.map((i) => {
                        return (
                            <li key={i.id} className="tarefas-item">
                                {i.txt}
                                <button className="btn-remove" onClick={() => { onRemoveTarefas(i.id) }}>X</button>
                            </li>
                        )
                    })
                ) : (
                    <span className="mensagem-vazia">Não há tarefas</span>
                )
            }
        </ul>
    )
}
export default TarefasLista