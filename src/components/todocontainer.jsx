import AddTodoForm from "./addtodoform";
import Todolist from "./todolist";
import { useState } from "react";
function TodoContainer() {
  const [activityArr,setActivityArr] = useState([
        {id:1, activity:"Go for a walk"},
        {id:2, activity:"Read a book"},
        {id:3, activity:"Cook dinner"}
    ]);

  return (
   
        <div>
        
          <div className="flex gap-5 flex-wrap">
        
             <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
              
              <Todolist  activityArr={activityArr} setActivityArr={setActivityArr}/>
            
       
              
          </div>
        </div>
    );  
}
export default TodoContainer;