
function TodoItem(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handleDelete(deleteId)
    {
        var temparr = activityArr.filter((item)=>{
            if(item.id === deleteId)
            {
                return false
            }
            else
                return true
        })
        setActivityArr(temparr)
    }

    return(
        <div className="flex justify-between">
        <p>{props.index+1}) {props.activity}</p>
        <button className="text-red-400" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )

}

export default TodoItem