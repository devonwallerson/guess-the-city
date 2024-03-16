import React, { useState } from 'react'
import './App.css';
import citiesData from './data/cities.json';
import Flashcard from './components/Flashcard';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';

const App  = () => {
  const [cities] = useState(citiesData) // establishing the cities data
  const [currIndex, setCurrIndex] = useState(0); // to manage index of card, starting at 0
  const [prevIndex, setPrevIndex] = useState(null);
  const [flipped, setFlipped] = useState(false) // to manage the flipping of the car

  const[guess, setGuess] = useState(''); // State for user guess
  const[isCorrect, setIsCorrect] = useState(null); // state for whether guess was correct or not

  const handleFlip = () => {
    setFlipped(!flipped); // set this to the opposite val
    console.log(flipped);
  }

  const handleGuess = () => {
    if(guess.toLowerCase() === cities[currIndex].city.toLowerCase()){
      setFlipped(true);
    }
  }
  function handleNext(){
    setPrevIndex(currIndex);
    setCurrIndex(getRan());
    setFlipped(false);
    setCurrIndex(getRan());
  }

  const handleBack = () => {
    if(prevIndex !== null){
      setCurrIndex(prevIndex);
      setFlipped(false);
      setIsCorrect(null);
    }
  }

  function getRan(){
    let random;
    do {
      random = Math.floor(Math.random() * 10); // to get random index
    } while (random === currIndex);
    return random;
  }

  
  return (
   <div className = "app">
    <h1>Guess the city!</h1>
    <h3>Can you tell what city this is based on the skyline?</h3>
    <h5>Number of cards: 10.</h5>

    <input
      type = "text"
      value = {guess}
      onChange = {(e) => setGuess(e.target.value)}
      placeholder = "Type Guess Here..."
    />
    <button onClick = {handleGuess} disabled = {flipped}>Submit</button>
    
    <div className = "flashcard" onClick = {handleFlip}>
      <Flashcard city = {cities[currIndex]} flipped = {flipped} handleFlip = {handleFlip} />
    </div>
    <NextButton handleNext = {handleNext} />
    <PrevButton handleBack = {handleBack} />

   </div>
  )
}

export default App
