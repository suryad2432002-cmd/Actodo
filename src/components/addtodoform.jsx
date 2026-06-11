import {useState} from "react";
function AddTodoForm(props) 
{
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newActivity, setNewActivity] = useState("");

    const handlechange = (evt) => {
        setNewActivity(evt.target.value);
    }

    function addactivity() {
        setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }]);
        setNewActivity("");
    }
    return (
       <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold mb-4">Manage Activities!</h1>
               <div className="flex ">
                        <input value={newActivity} onChange={handlechange} type="text" placeholder="Enter your activity here" className="border border-black bg-transparent px-2" />
                        <button onClick={addactivity} className="bg-black text-white px-2 border border-black">Add</button>
               </div>
              </div> 
    );
}
export default AddTodoForm;