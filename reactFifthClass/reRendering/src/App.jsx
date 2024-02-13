import { useState,memo, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState([1,2,3,4,5])

  function handleCount() {
    setCount((count) => count + 1)
  }
  const handleRandom = memo(() => {
    console.log("clicked");
    return Math.max(...number)
  },[])
  console.log("current", handleRandom);
  return (
    <>
      <div className="card">
        <button onClick={handleCount}>
          count is {count}
        </button>
        <br />
        {number}
        <br />
        {/* <button onClick={() => { handleRandom }}>
          Random 
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
    </>
  )
}

export default App
