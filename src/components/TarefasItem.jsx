import '../assets/TarefasItem.css'
import { useState } from 'react'
const TarefasItem = ({ tarefa, editTarefa, onRemoveTarefas }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editInput, setEditInput] = useState(tarefa.txt)
    const handleEdit = () => {
        !isEditing? setIsEditing(true) : setIsEditing(false)
        if(isEditing){
            editTarefa(tarefa.id, editInput.trim())
        }
        
    }
    const handleInput = (e) => {
        setEditInput(e.target.value)
    }
    const handleDelete = () => {
        onRemoveTarefas(tarefa.id)
    }
    return (
        <li className="tarefas-item">
            <div className='p1'>
            {isEditing?
            <input 
            type="text" value={editInput}
            onChange={handleInput}
            onKeyDown={(e)=>{
                console.log(e.key)
                if(e.key === "Enter") handleEdit()}}
            /> 
             : 
            tarefa.txt}
            <div>
                <button 
                className={isEditing? "btn-save" : "btn-edit"} 
                onClick={handleEdit}>
                    {!isEditing? 
                    <i className="fa-solid fa-pen"></i> 
                    : 
                    <i className="fa-solid fa-check"></i>} 
                </button>
                <button 
                className="btn-remove" 
                onClick={handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
            </div>
            <div className="txt-tiny">{tarefa.data}</div>
        </li>
    )
}
export default TarefasItem