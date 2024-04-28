import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import convertir  from './services/numberToLeters.js'
function App() {
  const [resultado, setResultado] = useState()
  const [de, setDe] = useState(1)
  const desde = useRef()
  const hasta = useRef()
  const numbers = async()=>{
    const numero1 = Number(desde.current.value)
    const numero2 = Number(hasta.current.value)
    const base = []
    const base2 = []
    console.log(numero1, numero2)
    for(var i = 0; i == Number(hasta.current.value); i ++){
      base2.push(i)
    }
    const prev = []
    console.log(base2)
    if(de == 1){
       base.forEach((value, index)=>{
      const data = {
        numero: index+1,
        letra: convertir(index + 1).replace("Pesos 00/100 M.N.", "")
      }
      prev.push(data)
    })   
    }else{
      base.forEach((value, index)=>{
        const i = index + 1
        if( i % de == 0){
         const data = {
          numero: index+1,
          letra: convertir(index + 1).replace("Pesos 00/100 M.N.", "")
        }
        prev.push(data)    
        }
      })  
    }

    console.log(prev)
    setResultado(prev)
  }
  return (
    <>
      <div>
        <h2>De numeros a letras</h2>
        <div>
          <input type="text" name="" id="" placeholder='1' ref={desde}/>
          <input type="text" name="" id="" placeholder='100' ref={hasta}/>
          <select name="" id="" onChange={(e)=> setDe(Number(e.currentTarget.value))}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <button onClick={numbers}>Calcular</button>
        </div>
       </div>
       <div>
        <table>
        {
          resultado && resultado.length > 0 && resultado.map((e)=>   <tr>
          <td>{e.numero}</td>
          <td>{e.letra}</td>
        </tr>)
        }          
        </table>

       </div>
    </>
  )
}

export default App
