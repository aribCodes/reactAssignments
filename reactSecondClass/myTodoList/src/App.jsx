import { useState } from 'react'
import Button from './components/forms/buttons/Button.jsx'
import addImage from './images/buttonImages/addBtnImage.png';
import deleteImage from './images/buttonImages/deleteBtnImage.webp';

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  
  function handleChange(event){
    setTask(event.target.value);
  }

  function addTask() {
    document.getElementById("addTaskInput").value = '';
    var newList = [...list];
    newList.push(task);
    setList(newList);
  }

  function deleteTask(index) {
    var newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }

  return(
    <>
      <div id='main' style={{width: "100vw", height: "100vh", background: "#F8B195", display:"flex", flexDirection:"column", alignItems:"center", boxSizing:"border-box" }}>
        <h1>--Todo App--</h1>
        <div style={{background:"white" ,height: "10vh", width:"70%",  display:"flex", alignItems:"center", justifyContent:"center", boxSizing:"border-box" }}>
          <input id='addTaskInput' style={{ height: "90%", width:"90%", fontSize:"large" }} placeholder='Enter your task' onChange={handleChange}/>
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