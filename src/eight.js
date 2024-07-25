import { useState } from 'react';
import Seventh from './seventh';
import Nine from './nine'; 
function Eight(){
    const [isLogin,setMessage]=useState(true);
    const loginButtonClick=()=>{
        setMessage(true);
    }
    const registerButtonClick=()=>{
        setMessage(false);
    }

    return(
        <div>
          <button type="submit" onClick={loginButtonClick} >Login</button>
          <button type="submit" onClick={registerButtonClick} >regiser</button>
          {isLogin ?
          <Seventh />
          :
          <Nine />
}
        </div>
    
    );

}
export default Eight;