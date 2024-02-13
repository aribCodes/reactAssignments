import { useState, useRef } from 'react'
import './App.scss'
import TicTacToe from './ticTacToe Game/TicTacToe';

function App() {
  const gameRef = useRef(null)
  const [count, setCount] = useState(0);
  const [fetch, setFetch] = useState(false);

  const handleFetch = () => {
    setFetch(prev => !prev)
  }

  return (
    <>
      <div id='main'>
        <p>i am a paragraph</p>
        <p>Count {count}</p>

        <button onClick={()=>{ setCount(count+1) }}> Click me </button>
        <TicTacToe handleFetch={handleFetch} ref={gameRef}/>
      </div>
    </>
  )
}

export default App
