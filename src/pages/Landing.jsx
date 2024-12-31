
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"

export default function Landing()
{
    const data = useLocation()
    console.log(data.state)
    return(
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
              <Header name={data.state.user}></Header>
              <div className="flex gap-7 justify-between my-5 flex-wrap">
              <Card backGroundColor={'#8272DA'} title={'23'} subtitle={'Chennai'}/>
              <Card backGroundColor={'#FD6663'} title={'December 20'} subtitle={'14:23:08'}/>
              <Card backGroundColor={'#FCA201'} title={'Built Using'} subtitle={'React'}/>
              </div>
              <TodoContainer></TodoContainer>
            </div>
        
        
          </div>
    )
}