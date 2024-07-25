import { useEffect, useState } from 'react';
function Fourth(){
   // const count=0;
   const [count,setCount]=useState(0);
   useEffect(()=>{
    //setCount(5);
    console.log("Use effect is called");
   },[count]);
   const funcAddToKartBtnKey=()=>{
    setCount(count+1);
}
   const funcIncBtnKey=()=>{
    setCount(count+1);
   }
   const funcDecBtnKey=()=>{
    if(count>0){
    setCount(count-1);
   }
}
    return(
        <div>
            {(count===0) ?
            <button className="btn btn-primary" onClick={funcAddToKartBtnKey}>Add To Kart</button>:
            <div style={{display:'flex'}}>
                <button className="btn btn-outline-dark btn-sm" onClick={funcIncBtnKey}>+</button>
                <h1>{count}</h1>
                <button className="btn btn-outline-dark btn-sm" onClick={funcDecBtnKey}>-</button>
                </div>
}
        </div>
    );
}
export default Fourth;