import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { darkTheme, blueTheme } from './store/slices/counter.slice'

function App() {
  const [switching, setSwitching] = useState(false);
  const [theme, setTheme] = useState("");
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  const handleTheme = () => {
    setSwitching(prev => !prev);
    if(switching){
      dispatch(darkTheme());
      console.log("true", count);
    }
    else{
      dispatch(blueTheme());
      console.log("false", count);
    }
  }

  return (
    <>
      <div 
        className={count}
      >
        {count}
        Redux Practice
        <button onClick={handleTheme}>Click me</button>
      </div>
    </>
  )
}

export default App
