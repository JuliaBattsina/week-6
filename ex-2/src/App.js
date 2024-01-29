import { useState } from "react";
import { data } from "./data";

function App () {
  const [toDo, setToDo] = useState (data);

  return (
    <div>
      {toDo.map ((thing => {
        const {id, toDoData} = thing;
        return (
          <div key={id}>
          <p> {id} {toDoData}</p>
          </div>
        )
      }))}
      <button onClick={() => setToDo ([])}>Delete</button>
    </div>
  )
}
export default App;