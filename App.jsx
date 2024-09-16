import { useState } from 'react'

const App = () => {

  let now = new Date();
  let segundos = now.getSeconds();
  let minutos = now.getMinutes();
  let horas = now.getHours();

  return(
      <h1>
        Pa, la hora es {horas}:{minutos}:{segundos}
      </h1>
    );
  };

export default App;