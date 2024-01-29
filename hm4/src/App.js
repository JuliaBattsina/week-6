import { useState } from "react";

function App() {

  const [text, setText] = useState ("I love JavaScript");

const changeText = () => {
    if (text === "I love JavaScript")
   {setText ("I love React")
}
else { 
   setText ("I love JavaScript")   
} 
}


return (
    <div>
        <h1> {text} </h1>
        <button onClick={changeText}>Click me</button>
    </div>
)
}
export default App;
