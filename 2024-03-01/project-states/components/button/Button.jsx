import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);

    console.log('Komponentas uzdetas')

    const handleClick = (e) => {
        setCount(count + 1);
     }

     const handleClickMinus = (e) => {
        if(count > 0){
        setCount(count - 1)
        }
     }

    return (
        <>
            <h2>Mygtuko paspaudimai</h2>

            <div>Rezultatas: {count}</div>
            <button 
            onClick={handleClick}>Pridėti</button>
            <button onClick={handleClickMinus}>Atimti</button>
        </>
    )

}

export default Button