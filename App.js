import { useState } from "react";
//import "./styles.css";

export default function App() {
  const[Input,setInput]=useState("")
  const[Data,setData]=useState([])

  


  return (
    <div className="App">
      <div>
      <h1>Todo list</h1>
      <input type="text" placeholder="add task" onChange={(event)=>{
        setInput(event.target.value)
        

      }}/>
      <button onClick={()=>{
         setData([...Data, Input])
         //console.log(data)
         setInput("")
    
  }}>Add task</button>
      </div>
      
      <ul>

        {Data.map((item)=>{
          return<li>{item} <button  onClick={() => {
            {
              const f = Data.filter((i) => {
                return i !== item
              })
              setData(f)
            }
          }}>delete</button></li>
          
        })}
        
        
      </ul>
      <button onClick={()=>{
        setData([])
      }}>all delete</button>
  
     
    

    

      
    </div>
  );
}
