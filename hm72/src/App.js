
import { useState } from "react";
import {data} from "./data";
import "./App.css"

function App () {
const [presents, setPresents] = useState (data);
const [picture, setPicture] = useState (0);
const {image} = data [picture];

const previousPicture = () => {
  setPicture ((picture => {
    picture --;
    if (picture <0) {
      return data. length -1;
    }
    return picture;
  }))
}
const nextPicture = () => {
  setPicture ((picture => {
  picture ++;
  if (picture > data.length - 1) {
    picture = 0;
  }
  return picture;
}))}
return (
  <div>
    <div className="container">
      <h1>List of present</h1>
    </div>
    {presents.map ((element => {
      const {id, present} = element;
      const removeList = (id) => {
      let newPresent = presents.filter (present => present.id !== id);
      setPresents (newPresent)
     }
      return ( <div className="container">
      <div key = {id} >
        <h2>{id} - {present}</h2>

        <div className="container">
          <button onClick = {() => removeList (id)}>Remove</button>
        </div>
      </div>
      </div> )
    }))}
 
<div className="container">
  <button onClick={() => setPresents ([])}>Delete</button>
</div>
<div className="container">
  <img src= {image} width= "300px" alt="present"/>

</div>
<div className=" btn container">
  <button onClick={previousPicture}>Previous</button>
  <button onClick={nextPicture}>Next</button>
</div>
</div>
)
}
 export default App;