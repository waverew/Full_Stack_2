import { useState } from "react";
import MyComponent from "./date";
import LikeButton from "./likebutton";
const Container = (props) => {
    const [vals, setVals]= useState(["Make a Tweet"])
    return <div>
        
        {props.message}
        
        <div>
            
            <input type="text" id = "bebra"></input>
            <button onClick={()=>{
                setVals([...vals, document.getElementById('bebra').value])
            }}  >Post</button>
        </div>
         {vals.map((k,p)=>{
            return <LikeButton  key={p} message={k}></LikeButton>
        })

        }
        <MyComponent/>
    </div>;
}
 
export default Container;