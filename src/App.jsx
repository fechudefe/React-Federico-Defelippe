import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  const titulo = "Bienvenidos E-Commerse";

  return (
    <>
      <Navbar/>     
      <ItemListContainer titulo={titulo}/>  
    </>
  )
}

export default App
