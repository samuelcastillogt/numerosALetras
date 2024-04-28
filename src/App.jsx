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
    for (var i = numero1; i <= numero2; i++) {
     base.push(i)
    }
    const prev = []
    if(de == 1){
       base.forEach((value, index)=>{
      const data = {
        numero: value,
        letra: convertir(value).replace("Pesos 00/100 M.N.", "")
      }
      prev.push(data)
    })   
    }else{
      base.forEach((value, index)=>{
        const i = value
        if( i % de == 0){
         const data = {
          numero: value,
          letra: convertir(value).replace("Pesos 00/100 M.N.", "")
        }
        prev.push(data)    
        }
      })  
    }
    setResultado(prev)
  }
  return (
    <>
      <div>
        <h2>De numeros a letras</h2>
        <div>
          <label>Desde</label>
          <input type="text" name="inicio" id="" placeholder='1' ref={desde}/>
          <label>Hasta</label>
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
          resultado && resultado.length > 0 && resultado.map((e, i)=>   <tr key={e.numero} 
                                                                            className={i % 2 == 0 ? "par" : "inpar"}>
                                                                          <td key={e.numero}>{e.numero}</td>
                                                                          <td key={e.letra}>{e.letra}</td>
                                                                        </tr>
                                                            )
        }          
        </table>

       </div>
    </>
  )
}

export default App
