import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
export default function TodoContainer(){
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Hi Hello"
        }
    ])
   return(
    <div>
        <div className="flex gap-5 flex-wrap">

        <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
        <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
       
        </div>
    </div>
   )

}