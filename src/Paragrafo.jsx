import {useState} from 'react'
function Paragrafo (props) {
    const  [pontos, setPontos] = useState(0)
    return (
        <div style={{display:'flex', gap:"10px",}}>
        {props.nome} tem {pontos} pontos.

        <button 
        onClick={()=>{
            if(pontos == 0) return;
            setPontos(pontos - 1)}}
        className='counter'>
            -
        </button>
        
        <button 
        onClick={()=>{
            setPontos(pontos + 1)}}
        className='counter'>
            +
        </button> 
        </div>
    )
}
export default Paragrafo