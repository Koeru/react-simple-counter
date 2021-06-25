import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

const App = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  
  return (
    <>
      <p>現在の数字は{count}です</p>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        -1
      </button>

      <button onClick={() => setCount(initialState)}>リセット</button>
    </>
  )
}

export default App;
