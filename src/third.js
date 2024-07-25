import { useEffect, useState } from 'react';
function Third(){
   // const count=0;
   const [count,setCount]=useState(1);
   useEffect(()=>{
    //setCount(5);
    console.log("Use effect is called");
   },[count]);
   const funcThirdBtnKey=()=>{
    setCount(count+2);
   }
    return(
        <div>
            <h1>Count {count}</h1>
            <button className="btn btn-dark" onClick={funcThirdBtnKey}>Click Here</button>
        </div>
    );
}
export default Third;