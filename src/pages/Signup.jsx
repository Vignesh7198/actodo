import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function Signup(props){

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    console.log(users)

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                  <h1 className="text-3xl font-medium">Hey Hi</h1>
                  <p>Sign up here :)</p>

                  <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border border-black p-1 bg-transparent rounded-md focus:outline-none" placeholder="username" onChange={handleUInput}></input>
                    <input type="password" className="w-52 border border-black p-1 bg-transparent rounded-md focus:outline-none" placeholder="password" onChange={handlePInput}></input>
                    <input type="password" className="w-52 border border-black p-1 bg-transparent rounded-md focus:outline-none" placeholder="confirm password"></input>
                    <button onClick={addUser} className="bg-[#FCA201] p-1 w-24 rounded-md">Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className='underline'>Login</Link></p>
                  </div>
            </div>
        </div>
    )
}