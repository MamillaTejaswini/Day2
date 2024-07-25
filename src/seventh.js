import { useRef, useState ,useEffect} from "react";
function Seventh(){
    // const width=200;
    const firstRef=useRef(null);
    const secondRef=useRef(null);
    const [loginMessage,setMessage]=useState('');
    //useEffect to focus on input field
    useEffect(()=>{
        firstRef.current.focus();
    });
    const formSubmitted=(event)=>{
        //to prevent default refresh after submitting
        event.preventDefault();
        if(firstRef.current.value==secondRef.current.value){
            //  console.log("Correct");
             setMessage("Correct");
        }
        else{
            // console.log("Incorrect");
            setMessage("Incorrect");
            //print on user interface
        }
        // firstRef.current.value='';
        // secondRef.current.value='';
        //clear value in text area after submitting
    }
    return(
        <div className="container">
         <div className="card" style={{width:'290px',padding:'30px'}}>
         <div>
            <form onSubmit={formSubmitted} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h4>Login</h4>
                <p>Provide your details to login</p>
                <label><b>College Id</b></label>
                <input type="text" ref={firstRef}/>
                <label><b>Password</b></label>
                <input type="password" ref={secondRef}/>
                <button type="submit" className="btn btn-dark" style={{ padding: '5px 10px', fontSize: '12px' ,width:'65px'}}>Login</button>
                {loginMessage}
            </form>
        </div>
        </div>
        </div>
    );
}
export default Seventh;