import './App.css';
import { useState } from 'react';

//dois exemplos de como usar o useState

function App() {
  // const [count, setCount] = useState(0);

  const [name, setName] = useState('');

  // function addCount() {
  //   setCount(count + 1);
  // }

  const getName = (e) => {
    setName(e.target.value);
  };
  return (
    // <>
    //   <h1>Contador</h1>
    //   <h1>{count}</h1>
    //   <button onClick={addCount}>Adicionar</button>
    // </>
    <>
      <h1>Qual o seu nome?</h1>
      <input type='text' onChange={getName} />
      <h2>Óla! Seja bem vindo {name}</h2>
    </>
  );
}

export default App;
