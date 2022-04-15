import { useState } from "react";

const LikeButton = (props) => {
    const [count, setCount] = useState(0)
    return <div >
        {props.message}
        <button onClick={()=>{
            setCount(count+1)
        }}>Like {count}</button>
    </div>;
}
 
export default LikeButton;