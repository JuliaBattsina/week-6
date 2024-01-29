import {useState} from "react";

function App () {
  const [count, setCount] = useState (100);
  const updateData = () => {
    setCount (count-5);
  }
  return (
    <div>
      <h1> {count} </h1>
      <button onClick = {updateData}>Click </button>
    </div>
  )
}
export default App;

