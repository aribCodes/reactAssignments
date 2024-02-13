import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </nav>
        <h1>
          Welcome To My <span>Website</span> 
        </h1>
      </div>
    </>
  )
}

export default App
