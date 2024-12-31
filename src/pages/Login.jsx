import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login(props) {

    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)
    const users = props.users


    function handleUInput(evt) {
        setEusername(evt.target.value)

    }

    function handlePInput(evt) {
        setEpassword(evt.target.value)

    }

    function checkUser() {
        var userfound = false
        users.forEach((item) => {
            if (item.username == eusername && item.password == epassword) {
                console.log("Login Successful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })
        if(userfound===false)
        {
            console.log("LOGIN FAILED")
            setRuser(false)
        }

    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    ruser ? <p>I help you manage your activities after you login :)</p> : <p className='text-red-400'>Login Failed</p>
                }
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border border-black p-1 bg-transparent rounded-md focus:outline-none" placeholder="username" onChange={handleUInput}></input>
                    <input type="password" className="w-52 border border-black p-1 bg-transparent rounded-md focus:outline-none" placeholder="password" onChange={handlePInput}></input>
                    <button className="bg-[#8272DA] p-1 w-24 rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className='underline'>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}