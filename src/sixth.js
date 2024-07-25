import { useRef } from "react";
function Sixth(){
    //creating reference
    const firstRef=useRef(null);
    const formSubmitted=(event)=>{
        //to prevent default refresh after submitting
        event.preventDefault();
        console.log("Form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value='';
        //clear value in text area after submitting
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Sixth;