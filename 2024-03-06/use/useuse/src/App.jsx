import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [skaicius, setSakicius] = useState(0);
  const [message, setMessage] = useState(0);

const inputRef = useRef(0);


  useEffect(() => {

    if(skaicius > 300) {

      setMessage('Reikia vandens')
    }
    
    if(skaicius < 300) {

      setMessage('Nereikia vandens')
    }
     
  }, [skaicius]);




  const renewCows = (e) => {

    const inputValue = inputRef.current.value;

    setSakicius(inputValue);

  }

  return (
    <>
    
    <label htmlFor="">Skaicius</label>
    <input name="karviuSkaicius" type="number" ref={inputRef}/>
    <p>{skaicius}</p>
    <p>{message}</p>
   <button onClick={renewCows} style={{width: 200, color: 'blue', backgroundColor: 'lightGreen'}} >Atnaujinti skaiciu</button>
    </>
  )
}

export default App
