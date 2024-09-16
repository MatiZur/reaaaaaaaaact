import { useState } from 'react'

const App = () => {

  const [numero, setNumero] = useState(Math.floor(Math.random() * 1000))

  const handleClick = (event) => {
    setNumero(Math.floor(Math.random() * 1000))
  }

  return(
      <h1 onClick={handleClick}>
        {numero}
      </h1>
    );
  };

export default App;