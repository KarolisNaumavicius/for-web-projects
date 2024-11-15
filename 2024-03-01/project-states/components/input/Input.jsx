import { useState } from 'react';

const Input = () => {

    // State'o sukūrimas
    const [fieldValue, setFieldValue] = useState();

    
  const handleChange = (e) => {
    setFieldValue(e.target.value);

  };

    return (
        <>
            <input
             type='text'
        onChange={handleChange}
      />
      <div>{fieldValue}</div>
        </>
    )

}

export default Input