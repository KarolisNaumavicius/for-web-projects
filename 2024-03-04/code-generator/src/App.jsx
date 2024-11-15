import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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
  const [selectedOptions, setSelectedOptions] = useState(["numbers", "symbols"]); // Pradinė reikšmė - abu pasirinkti
  const [length, setLength] = useState(10);

  const generateCode = (length) => {
    let characters = [];

    if (selectedOptions.includes("numbers")) {
      characters.push(...numbers);
    }
    if (selectedOptions.includes("symbols")) {
      characters.push(...symbols);
    }

    if (characters.length === 0) {
      // Jei nei vienas variantas nepasirinktas, naudojame abu
      characters = [...numbers, ...symbols];
    }

    let generatedCode = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedCode += characters[randomIndex];
    }

    setCode(generatedCode);
  };

  useEffect(() => {
    generateCode(length);
  }, []);

  const handleGenerateClick = () => {
    generateCode(length);
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
      setLength(newLength);
    }
  };

  return (
    <div className="App">
      <main>
        <h1>Kodų generatorius</h1>
        <input className="first" type="text" value={code} />
        <br />
        <label for="length">Pasirinkite kodo ilgį:</label>
        <input
          type="number"
          id="length"
          min="1"
          defaultValue={length}
          onChange={handleLengthChange}
        />
        <br />
        <label>Pasirinkite kodo tipą (galite pasirinkti kelis):</label>
        <br />
        <input
          type="checkbox"
          name="option"
          value="numbers"
          checked={selectedOptions.includes("numbers")}
          onChange={handleOptionChange}
        />
        <label for="numbers">Tik skaičiai</label>
        <br />
        <input
          type="checkbox"
          name="option"
          value="symbols"
          checked={selectedOptions.includes("symbols")}
          onChange={handleOptionChange}
        />
        <label for="symbols">Tik simboliai</label>
        <br />
        <button onClick={handleGenerateClick}>Generuoti</button>
      </main>
    </div>
  );
}

export default App;