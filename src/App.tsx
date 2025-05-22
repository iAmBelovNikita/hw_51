import './App.css'
import Generator from "./Generator/Generator.tsx";
import {useState} from "react";


const numberGenerator = () => {
  const numberArray:number[] = [];

  while (numberArray.length !== 5) {
    const currentNumber = Math.floor(Math.random() * 32) + 5;

    if (numberArray.includes(currentNumber)) {
      continue;
    }

    const isLargeNumber = numberArray.findIndex((element) => element > currentNumber);
    if (isLargeNumber === -1) {
      numberArray.push(currentNumber);
    } else {
      numberArray.splice(isLargeNumber, 0, currentNumber);
    }
  }

  return numberArray;
};

const App = () => {
  const [defaultNumber, setDefaultNumber] = useState([
    {number: 5},
    {number: 11},
    {number: 16},
    {number: 23},
    {number: 32}
  ]);


  const changeNumbers = () => {

    const newNumbers:number[] = numberGenerator();

    setDefaultNumber([
      {number: newNumbers[0]},
      {number: newNumbers[1]},
      {number: newNumbers[2]},
      {number: newNumbers[3]},
      {number: newNumbers[4]}
    ])
  }

  return (
      <>
        <button onClick={changeNumbers} type="button">Randomise !</button>

        <div>
        <Generator valueNumber={defaultNumber[0].number}/>
        <Generator valueNumber={defaultNumber[1].number}/>
        <Generator valueNumber={defaultNumber[2].number}/>
        <Generator valueNumber={defaultNumber[3].number}/>
        <Generator valueNumber={defaultNumber[4].number}/>
        </div>
      </>
  )
};

export default App;
