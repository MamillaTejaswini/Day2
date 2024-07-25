import React from "react";
class Second extends React.Component {
    count=0;
    name1="ReactJs";
    constructor(){
        super();
        this.state={
            number:1
        }
        console.log("Constructor is called!");
        console.log(this.count);
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
    }
    componentDidUpdate(){
        console.log("Component updated");
    }
    componentWillUnmount(){
        console.log("Will be Mounted");
    }
funcSecondBtnKey=()=>{
    console.log("Button Clicked");
    console.log(this.count+1);
    this.setState({number:this.state.number+1});
}
    render(){
        return(
        <div><h1>This is a component</h1>
         <h1>{this.count}</h1>
         <h1>{this.name1}</h1>
         <h1>{this.state.number}</h1>
         <button  className="btn btn-primary" onClick={this.funcSecondBtnKey}>Click here</button>
         </div>
        );
    }
}
export default Second;