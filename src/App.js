import { useState } from "react";

function App() {
  const [count,setcount]=useState(0);
  const handleInc=()=>{
    setcount((prev)=>prev+1);
  }
  const handleDec=()=>{
    setcount((prevState)=>prevState-1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>handleInc()}>Increment</button>
      <button onClick={()=>handleDec()}>Decrement</button>
    
    </div>
  );
}

export default App;
