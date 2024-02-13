import { useState, useRef, useEffect } from 'react'
import Button from './components/forms/buttons/Button.jsx'
import addImage from './images/buttonImages/addBtnImage.png';
import deleteImage from './images/buttonImages/deleteBtnImage.webp';
import TextField from "./components/forms/inputs/TextField.jsx";

function App() {
  const headingRef = useRef(null);  // it can be 0 or null
  const inputRef = useRef(null);
  const priorityRef = useRef(null);
  const statusRef = useRef(null);                                                                                                                                
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  
  // function handleChange(event){
  //   setTask(event.target.value);
  // }

  useEffect(() => {                                                       
    inputRef.current.value = ""
    priorityRef.current.value = ""
    statusRef.current.value = ""
  },[list])

  function addTask() {
    const data = inputRef.current.getChildData();
    console.log("data", data);

    // console.log(headingRef.current.innerText);

    console.log(inputRef.current.value, priorityRef.current.value, statusRef.current.value);
    var newList = [...list, `Task:${inputRef.current.value} | Priority:${priorityRef.current.value} | Status:${statusRef.current.value}`];
    setList(newList);
    
    // newList.push(task);
    // inputRef.current.value = ""
    // priorityRef.current.value = ""
    // statusRef.current.value = ""
  }

  function deleteTask(index) {
    var newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }
  return(
    <>
      <div id='main' className='main' style={{width: "100vw", height: "100vh", background: "#F8B195", display:"flex", flexDirection:"column", alignItems:"center", boxSizing:"border-box" }}>
        <h1 ref={headingRef}>--Todo App--</h1>
        <div style={{background:"white" ,height: "10vh", width:"70%",  display:"flex", alignItems:"center", justifyContent:"center", boxSizing:"border-box" }}>
          <TextField height="90%" width="30%" fontSize="large" placeholder='Enter your task' ref={inputRef}/>
          <TextField height="90%" width="30%" fontSize="large" placeholder='Set priority of task' ref={priorityRef}/>
          <TextField height="90%" width="30%" fontSize="large" placeholder='Enter status of task' ref={statusRef}/>
          <Button image={addImage} btnHeight="98%" btnWidth="9%" handler={addTask}/>
        </div>
        
        <div style={{overflowY: "scroll", background:"white" ,height: "60vh", width:"70%"}}>
          <ul>
            {
              list.map((element,index) => {
                return(
                  <li key={index} style={{marginBottom:"5px", height:"7vh", width:"95%", borderRadius:"10px", background:"#F8B195", fontWeight:"bold", padding:"3px"}}>{element} <Button image={deleteImage} btnBackground="red" float="right" btnHeight="inherit" handler={()=>{
                    deleteTask(index)
                  }}/></li>
                )
              })
            }
          </ul>
        </div>
        
      </div>
    </>
  )
}


export default App;