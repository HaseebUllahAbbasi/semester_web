
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

export const ToDo = (props) => {
  return (
     <tr >
       <td>{props.ind+1}</td>
       <td>{props.task_value}</td>
    <td> <button type="button" className="btn btn-success" onClick={()=>props.remove_item(props.ind)}> Complete Task  </button> </td>
     </tr>)
}

function TodoList()
{

  const [fullTasks,setFullTasks] = useState([]);

  const [task,setTask] = useState();
  const [tasks,setTasks] = useState([]);
 
  const remove_item = (value)=>
  {
    const new_tasks =tasks.filter((task_m,index)=>
    {
      return value!==index;
    })
    const new_full_task =tasks.filter((task_m,index)=>
    {
      return value===index;
    })
    setFullTasks([...fullTasks,new_full_task]);
    setTasks(new_tasks)

  }
  const on_change_method = (event) =>
  {
      setTask(event.target.value);
  }
  const add_task=()=>
  {
    if(task!=="")
    {
      setTasks([...tasks,task])
    }
  }

  return(
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
            tasks.length?
            <table className="table my-3 mb-3">
            <thead>
                <tr>
                    <th>No </th>
                    <th>Task </th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody id="table_body_to_do">
            {
                tasks.map((task_n,index)=> (<ToDo key={index} ind={index} task_value={task_n} remove_item={remove_item} />))     
            }

            </tbody>
        </table>
          :<div className="text-center"> No Tasks </div>  

          }
        </div>
      </div>
      <div className="row">
      <h1 className="display-3">Tasks Completed            </h1>
          {
            fullTasks.length?
            <table className="table my-3 mb-3">
            <thead>
                <tr>
                    <th>No </th>
                    <th>Task </th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody id="table_body_to_do">
            {
                fullTasks.map((task_n,index)=> (<ToDo key={index} ind={index} task_value={task_n} remove_item={remove_item} />))     
            }

            </tbody>
        </table>
          :<div className="text-center"> No Tasks </div>  

          }
        </div>

    </div>
  )
}
export default TodoList;












// Way 1 


/**
function App() 
{
  const [task,SetTask] = useState("")
  const [tasks,setTasks] = useState([])
  // const [count,setCount] = useState(1);
  
  const [fullTasks,setFullTasks] = useState([])
  
  const on_change_method = (event)=>{
    SetTask(event.target.value);    
    //  console.log(task);
  }
  const add_task =()=>
  {
    // console.log("task to add "+ task);
    if(task!=="")
    {
      // setCount(count+1)
    setTasks([...tasks,task])
    }
  }
  const remove_item = (value)=>
  {   
    const new_tasks = tasks.filter( (task_n,index) =>{
      return value !== index;
    } )
    const new_completed_task = tasks.filter((task_n,index)=> {
      return value === index;
    } )
    setFullTasks([...fullTasks,new_completed_task])
    //console.log(value+" is pressed");
    setTasks(new_tasks);
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
              // tasks.length == 0 && <div className="text-center"> No Tasks </div>                 
            }
            {
              tasks.length?
                <table className="table my-3 mb-3">
                <thead>
                    <tr>
                        <th>No </th>
                        <th>Task </th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody id="table_body_to_do">
                {
                    tasks.map((task_n,index)=>
                    { 
                       return (
                         <tr key={index}>
                           <td>{index+1}</td>
                           <td>{task_n}</td>
                        <td> <button type="button" className="btn btn-success" onClick={()=>remove_item(index)}> Complete Task  </button> </td>
                         </tr>
                         )             
                    })     
                }

                </tbody>
            </table>
              :<div className="text-center"> No Tasks </div>  

              // (<div className="text-center"> No Tasks </div>  &&
              //   tasks.map((task_n,index)=>
              // { 
              //    return (
              //     <div key={index}>  
              //        <div> {task_n} </div>
              //       </div> )             
              // }))
              // :<div className="text-center"> No Tasks </div>  
            }
            
            // { {
            //   tasks.length ? 
            //   tasks.map((task_n,index)=>
            //   { 
            //      return 
            //      <div key={index}>  
            //         <div> {task_n} </div>
            //        </div>               
            //   }): 
            //    <div className="text-center"> No Tasks </div>  
            // } }
            

          </div>
   

          <div className="row">
            <h1 className="display-3">
                Completed Tasks
            </h1>
            {
              fullTasks.length?
              <table className="table my-3 mb-3">
              <thead>
                  <tr>
                      <th>No </th>
                      <th>Task </th>
                      <th>Complete</th>
                  </tr>
              </thead>
              <tbody id="table_body_to_do">
              {
                  fullTasks.map((task_n,index)=>
                  { 
                     return (
                       <tr key={index}>
                         <td>{index+1}</td>
                         <td>{task_n}</td>
                      <td> <input type="checkbox" checked disabled/> </td>
                       </tr>
                       )             
                  })     
              }

              </tbody>
          </table>
            :<div className="text-center"> No Tasks </div>  

            }

          </div>
   
      </div>

    </div>
  );
}
export default App;
**/


