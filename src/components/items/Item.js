import { useState } from "react";


function Item (props){
     const [title,setTitle] = useState(props.title);
    // [varToUse, functionToUpdate] 
    const changeIt = () => {
        setTitle ("Updated" + title);
        console.log(title);
    }
    // const data = ` Item no : 01`
    return(
        <div>
           {title}
           <button onClick={changeIt} > Change </button>
        </div>
    )
} 

export default Item;