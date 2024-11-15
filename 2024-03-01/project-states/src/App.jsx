import { useState } from 'react';
import './App.css';
import Input from '../components/input/Input.jsx';
import Button from '../components/button/Button.jsx';
import IdButtons from '../id-buttons/idButtons.jsx';

function App() {
  // Startinė reikšmė
  // const [count, setCount] = useState('Hello'); - Gali buti tekstas 


 
  return (
    <>
<IdButtons /> <br />
<Button /> <br />
<Input />
    </>
  );

}

export default App
