import { useState } from "react"
const CaixaTexto = () =>{
    const [texto, setTexto] = useState('')
    const gerenciaTexto = (e)=>{
        setTexto(e.target.value)
    }
    return <div>
        <h3>Input</h3>
        <input type="text" value={texto} onInput={gerenciaTexto}/>
        <h4>Você digitou {texto}</h4>
    </div>
}
export default CaixaTexto