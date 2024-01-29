import {useState} from "react";

function App () {
  const [name, setName] = useState ("Alla");
  const [number, setNumber] = useState (28);
  const updateData = () => {
    setName ("Emily");
     setNumber (3); 

 
  }
  return (
    <div>
      <h1>Hello {name} </h1>
      <h2>I am {number} years old </h2>
      <button onClick = {updateData}>Click </button>
    </div>
  )
}
export default App;

