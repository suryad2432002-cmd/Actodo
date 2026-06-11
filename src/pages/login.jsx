import { useState , users } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()
    const [eusername,setEusername]= useState()
    const [epassword,setEpassword]= useState()
    const [ruser,setruser] = useState(true)

    const users=props.users


    function handleuInput(evt)
    {
        setEusername(evt.target.value)
    }
    
    function handleuPassword(evt)
    {
        setEpassword(evt.target.value)
    }
    
    function checkUser()
    {
var userfound = false

        users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("Login Successfull")
            userfound = true
            navigate("/landing", {state:{user:eusername}})
        }
        
    })
    if(userfound===false)
    {
        console.log(" Login Failed")
        setruser(false)
    }
    }
    return (

         <div className="bg-black p-10">
                    <div className="bg-white p-10 border rounded-md">
                        <h1 className="text-3xl font-medium">Hey Hi</h1>
                        {ruser?<p>I help you manage your activities:) </p>:<p className="text-red-500">please signup before you login</p>}
                        
                        <div className="flex flex-col gap-2 my-2">
                            <input
                             type="text" 
                             className="w-52 border-black p-1 bg-transparent border rounded-md" 
                            placeholder="username" onChange={handleuInput}>
                            </input>
                            <input
                             type="text" 
                             className="w-52 border-black p-1 bg-transparent border rounded-md" 
                            placeholder="password" onChange={handleuPassword}>
                            </input>
                            
                            <button onClick={checkUser} 
                            className="bg-orange-500 w-24 p-1 rounded-md">
                                Login</button>
                            <p>Don't have an Account? <Link to={"/signup"} className="underline ">Signup</Link> </p>
                        </div>
        
                    </div>
                </div>
    )
}
export default Login