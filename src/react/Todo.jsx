import React ,{useState} from 'react'
const Todo = () => {
    const[task,setTask]=useState('');
    const[tasklist,setTasklist]=useState([]);
    function addTask()
    {     if(task){
            setTasklist([...tasklist,task]);
            setTask('');
        }
    }
    function deleteTask(index){
        setTasklist(tasklist.filter((_,i) =>i !== index));
    }
  return (
    <div style={{
        margin:"30px",
        padding:"20px",
        border:"1px solid black",
        width:"300px",
        fontFamily:"Arial",
        backgroundColor:"brown"
    }}>

        <h2 style={{textAlign:"center"}}>To Do List</h2>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} 
        placeholder="enter the task"
        style={{
            padding:"8px",
            width:"100%",
            marginBottom:"10px",
           
            boxSizing:"border-box"
        }}
        />
        <button onClick={addTask} style={{ 
            padding:"8px",
            backgroundColor:"#4CAF50",
            color:"black",
            border:"none",
            cursor:"pointer"
        }}>add</button>
        <ul style={{listStyle:"none",padding:0,
            marginTop:"20px"}}>
                {tasklist.map((t,index)=>(
                    <li key={index}
                    style={{
                        marginBottom:"10px",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        backgroundColor:"#f9f9f9",
                        padding:"6px 10px",
                        borderRadius:"5px",
                        color:"black"
                    }}>
                        {t}
                        <button 
                        onClick={()=>
                            deleteTask(index)}
                            style={{
                                backgroundColor:"#e74c3c",color:"black",border:"none",
                                padding:"5px 10px"
                        }}
                        > delete</button>
                        </li>

                ))}
                </ul>
                </div>
                );
                };

export default Todo;
