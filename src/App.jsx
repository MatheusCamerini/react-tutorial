import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Paragrafo from './Paragrafo'
import CaixaTexto from './CaixaTexto'
function App() {
  const nomes = ['FULANO', 'CICLANO', 'BELTRANO']

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
          <br />
          <br />
          <div style={{display:'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>
          {nomes.map(function (nome){return <Paragrafo nome={nome} key={nome}/>})}
          <br />
          <br />
          <CaixaTexto/>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
