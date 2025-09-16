import React from "react";
import ReactDOM from "react-dom/client"

const heading=<h1 id="heading">hello world🚀</h1>

const Title=()=>{
return(
  <div className="title">
    <h2>title component</h2>
  </div>

)
}

const Header=()=>{
  return(
    <div className="header">
      {heading}
      {Title()}
      <h1>Functional Component</h1>
      <h1>{100+3}</h1>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)