
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
function App() 
{
  const [task,SetTask] = useState("")
  const [tasks,setTasks] = useState([])
  const [count,setCount] = useState(1);
  const on_change_method = (event)=>{
    SetTask(event.target.value);    
    //  console.log(task);
  }
  const add_task =()=>
  {
    // console.log("task to add "+ task);
    if(task!=="")
    {
      setCount(count+1)
    setTasks(prevTaks => {
          const newTask = {
            id: count,
            task_value : {task}
          }
          
      //    console.log("task adding "+ count);
        //  console.log( " task ");
        // console.log(tasks);
        SetTask('')
          return [...prevTaks,newTask];
        }
      )
    }
    
  }

  return (
    <div className="App">
      <div className="container">
          <div className="row">
            <h1 className="display-2">
              To Do App
            </h1>
                  <div className='col-md-4 offset-md-4  my-1'>
                  <input className="form-control" onChange={on_change_method} type="text" placeholder="Task" value={task} />
                  </div>
                  <div className="text-center my-1">
                      <input className="btn btn-primary" onClick={add_task} type="button" value="Add Task"  />
                  </div>
          </div>
          <div className="row">
            <h1 className="display-3">
                Tasks to complete
            </h1>
            {
              
              tasks.length ?
              tasks.map((elem,index)=>
              { 
                 return <div key={index}> {elem}  </div>}
              ): 
               <div className="text-center"> No Tasks </div>
              
            }

          </div>
   

          <div className="row">
            <h1 className="display-3">
                Completed Tasks
            </h1>
            {
              
              // tasks.length ?
              //tasks.map((task_n,key)=>{ return key} ):
              <div className="text-center"> No Tasks Completed </div>
              
            }

          </div>
   
      </div>

    </div>
  );
}

export default App;
