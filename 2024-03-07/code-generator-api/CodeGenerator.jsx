import React, { useState, useEffect } from 'react';


function CodeGenerator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ";",
    ":",
    '"',
    "'",
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
  ];

  const [code, setCode] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]); // Array to store selected options

  const generateCode = (length = 10) => {
    const characters = [...numbers, ...symbols];
    let generatedCode = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedCode += characters[randomIndex];
    }

    setCode(generatedCode);
  };

  useEffect(() => {
    generateCode(); // Generate code initially
  }, []);

  const handleGenerateClick = () => {
    generateCode();
  };

  const handleOptionChange = (event) => {
    const isChecked = event.target.checked;
    const optionValue = event.target.value;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== optionValue));
    }
  };

  const handleLengthChange = (event) => {
    const newLength = parseInt(event.target.value, 10);
    if (!isNaN(newLength) && newLength > 0) {
      generateCode(newLength);
    }
  };

  return (
    <>
 
    <div className="App">
      <header>

        <h2>Need a password? Try the 1Password Strong Password Generator.</h2>
      </header>
      <main>
        <h1>Code Generator</h1>
        <input type="text" value={code} />
        <button onClick={handleGenerateClick}>Generuoti</button>
        <br />
        <br />
        <label>Pasirinkite kodo tipą (galite pasirinkti kelis):</label>
        <br />
        <input
          type="checkbox"
          name="option"
          value="numbers"
          checked={selectedOptions.includes("numbers")} // Check if option is selected
          onChange={handleOptionChange}
        />
        <label for="numbers">Tik skaičiai</label>
        <br />
        <input
          type="checkbox"
          name="option"
          value="symbols"
          checked={selectedOptions.includes("symbols")} // Check if option is selected
          onChange={handleOptionChange}
        />
        <label for="symbols">Tik simboliai</label>
        <br />
        <br />
        <label for="length">Kodo ilgis:</label>
        <input type="number" id="length" min="1" defaultValue={10} onChange={handleLengthChange} />
        <br />
        <br />
      </main>
    </div>
    </>
  );
}

export default CodeGenerator;

