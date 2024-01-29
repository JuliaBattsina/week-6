import {useState} from "react";

function App () {
  const [name, setName] = useState ("Alla");
  const updateData = () => {
    setName ("Emily");
  }
  return (
    <div>
      <h1>Hello {name} </h1>
      <button onClick = {updateData}>Click </button>
    </div>
  )
}
export default App;

