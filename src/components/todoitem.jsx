function TodoItem(props) {
    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    function handleDelete(deleteId){
        const updatedArr = activityArr.filter(function(item){
            if(item.id === deleteId){
                return false;
            }
            return true;
        })
        setActivityArr(updatedArr);
    }

    return (
        <div className="flex justify-between items-center border border-gray-300 p-2 rounded-md mb-2">
        <p>{props.index+1}.{props.activity}</p>
        <button onClick={()=>handleDelete(props.id)} className="bg-red-500 text-white px-2 border border-red-500 ml-2">Delete</button>
    </div>
    );
}
export default TodoItem;