import { useState, useEffect } from 'react';
import './App.css'
import Products from './components/products/Products.jsx';


function App() {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(localStorage.getItem('text'));
  },[])

  const setLocalValue = (e) => {

    console.log("veikia");
    // informacijos talpinimas i lokalu padele (localstorage)
    localStorage.setItem('text', 'Hello World');
    console.log(localStorage.setItem('text', 'Hello World'));
  }

  const getLocalValue = (e)=> {const name = e.target.name.value;
  const email = e.target.email.value;
    setValue(localStorage.getItem('text'));
  }

  return (
    <>
<h1>Local Storage</h1>
<div className='my-3'>{value}</div>

<button
className="btn btn-primary" onClick={setLocalValue} style={{marginRight: 10}}> Set Local Value
</button>

<button
className="btn btn-primary" onClick={getLocalValue} style={{marginLeft: 10}}> Get Local Value
</button>
<Products />



    </>
  )
}

export default App
