 import TodoItem from "./todoitem";
 
 function Todolist(props) 
{
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    return (
        <div className="bg-violet-200 p-5 border rounded-md mt-5 flex-grow"> 
                <h1 className="text-2xl font-bold mb-4">Today Activities:</h1>
                
                {activityArr.length===0? <p>No activities added yet.</p>:""}
                {
                    activityArr.map(function(item,index){
                        return (
                            <TodoItem id={item.id}  activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                        )
                    })
                }
              </div>
    );
}
export default Todolist;