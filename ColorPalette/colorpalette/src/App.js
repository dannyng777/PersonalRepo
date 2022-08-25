import './App.css';
import {useState} from 'react';



function App() {
  let generateRandomColor = ()=>{
  let red = Math.floor(Math.random()* 255);
  let green =Math.floor(Math.random()* 255);
  let blue =Math.floor(Math.random()* 255);

  return `rgb(${red},${green},${blue})`
}
  const [background_color, setBackgroundColor] = useState(generateRandomColor())
  const [isLocked, setIsLocked] = useState(false);

  let changeColors = ()=>{
    console.log('button clicked')
    if(isLocked == false){
    setBackgroundColor(generateRandomColor())
  }
  }
  let lockColor = ()=>{ /** when function is called, switching isLocked to the opposite of what it is. */
    setIsLocked(!isLocked)
  }

  return (
    <div className="App">
     <div style={{height:"150px", width:"150px", backgroundColor:background_color, borderRadius:"50%"}}
     onClick ={lockColor}>
      {isLocked ? 'locked':''}
     </div>
     <div>
      <button onClick={changeColors}>Regenerate Colors</button>
     </div>
    </div>
  );
}

export default App;
