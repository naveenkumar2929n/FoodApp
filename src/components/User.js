import React from "react";
import { LOGO_URL } from "../utils/constants";

class Userclass extends React.Component{
  constructor(props){
    super(props)
    this.state={
   count:0
    }
    console.log("constructor called");
    
  }
  increment=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  componentDidMount(){
    console.log("componentDidMount called");
    
  }

componentDidUpdate(){
  console.log("componentDidUpdate called");
  
}

componentWillUnmount(){
  console.log("unmount called");
  
}

  render(){
    console.log("render called");
    
    return(
    <div>
      <h1>{this.props.name}</h1>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>click</button>
    </div>
    )
}
}


export default Userclass