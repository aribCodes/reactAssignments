import {useState} from "react"

function Button(props){
  console.log("props Btn",props);

  // const [count, setCount] = useState(0);
  
  // function handleClick() {
  //   setCount(count+1);
  //   console.log(count);
  // }
  return (
    <button
      style={{
        background:props.color,
        fontSize:props.fontSize

      }}
      onClick={props.handleClick}
      >
      {props.text} click {props.count}
    </button>
  )
}

function App(){
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
    console.log(count);
  }

  return (
    <div>
      <h1>Hi</h1>
      <Button text={'btn1'} color={'yellow'} fontSize={'30px'} count={count} handleClick={handleClick}/>
      <Button text={'btn2'} color={'lightBlue'} count={count} handleClick={handleClick}/>
      <Button text={'btn3'} color={'lightGreen'} count={count} handleClick={handleClick}/>
    </div>
    
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
