import Header from "./components/header";
import Card from "./components/Card";
import Todo from "./components/todocontainer";
import {Route, Router, Routes,BrowserRouter} from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState,users } from "react";

 
function App()
{
  const [users,setusers] = useState(
        [
            {
                username:"john",
                password:"123"

            }
        ]
    )
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login users={users} setusers={setusers}/>} />
    <Route path="/signup" element={<Signup users={users} setusers={setusers} />} />
    <Route path="/landing" element={<Landing />} />
  </Routes>
  
  </BrowserRouter>
  </>
  )
}
export default App;