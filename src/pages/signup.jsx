import { Link } from "react-router-dom"
import { useState } from "react"

function Signup(props) {
   
   const users=props.users
   const setusers=props.setusers

const [eusername,setEusername]= useState()
    const [epassword,setEpassword]= useState()

 function handleuInput(evt)
    {
        setEusername(evt.target.value)
    }
    
    function handleuPassword(evt)
    {
        setEpassword(evt.target.value)
    }
    function adduser()
    {
        setusers([...users,{username:eusername,password:epassword}])

    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I help you manage your activities after you login :) </p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                     type="text" 
                     className="w-52 border-black p-1 bg-transparent border rounded-md" 
                    placeholder="username" onChange={handleuInput}>
                    </input>
                    <input
                     type="text" 
                     className="w-52 border-black p-1 bg-transparent border rounded-md" 
                    placeholder="create password" onChange = {handleuPassword}>
                    </input>
                    <input
                     type="text" 
                     className="w-52 border-black p-1 bg-transparent border rounded-md" 
                    placeholder="confirm password">
                    </input>
                    <button className="bg-violet-700 w-24 p-1 rounded-md" onClick={adduser}>Signup</button>
                    <p>Already have an Account? <Link to={"/"} className="underline ">Login</Link> </p>
                </div>

            </div>
        </div>
    )
}
export default Signup