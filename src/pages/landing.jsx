import { useLocation } from "react-router-dom"
import Header from "../components/header";
import Card from "../components/Card";
import Todo from "../components/todocontainer";

function Landing() {
    const data =useLocation()
    
    return(<>
           <div className="bg-black p-16" >
        <div className="bg-white p-10 border rounded-md">
          
          <Header name={data.state.user}/>
        
        <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Vellore"} />
            <Card bgcolor={"#FD6663"} title={"jun 10 2026"} subtitle={"04:43:55"} />
            <Card bgcolor={"#FCA201"} title={"build using"} subtitle={"React"} />
        </div>
      
      <Todo />
      </div>
      </div>
</>
  );
}
    

export default Landing 