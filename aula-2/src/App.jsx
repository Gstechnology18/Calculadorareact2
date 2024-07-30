import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import Frase from './components/Frase'
import Calculadora from './components/Calculadora'

function HelloWorld(){
  return <p>Helloworld</p>
}

function App() {
return (
<>
<HelloWorld></HelloWorld> 
<Mensagem texto="helloworld2"></Mensagem>
<Frase></Frase>
<Calculadora></Calculadora>
</>
)
}
export default App