import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Marca from './Marca.jsx'

function App(){
  const imagen = "https://static.vecteezy.com/system/resources/previews/022/636/379/non_2x/starbucks-logo-starbucks-icon-transparent-free-png.png";
  const nombre = "Starbucks";

  return(
    <Marca imagen={imagen} nombre={nombre} />
  );
}

export default App
