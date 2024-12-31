import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import { useState } from "react";
function App()
{
  const [users, setusers] = useState([

    {
        username: 'vicky',
        password: '123'
    }
])

  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}></Login>}></Route>
      <Route path='/signup' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
      <Route path='/landing' element={<Landing></Landing>}></Route>
     </Routes>
  </BrowserRouter>
  )
}

export default App;