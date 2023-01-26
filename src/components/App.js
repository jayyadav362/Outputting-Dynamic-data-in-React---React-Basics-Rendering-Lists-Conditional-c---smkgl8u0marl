import React,{useState,useRef} from 'react'
import '../styles/App.css';
const App = () => {
  const [name,setName] = useState("");
const nameRef =  useRef(null);
const handleClick =()=>{
  setName(nameRef.current.value)
}
  return (
    <div id="main">
      <input id='input' ref={nameRef}></input>
      <button id='button' onClick={handleClick}>Click</button>
      <p id='text'> Hello my name is {name ? name:"__"} and I study at Newton School</p>
      </div>
  )
}


export default App;