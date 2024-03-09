import React, { useState } from 'react'
import './App.css';
import citiesData from './data/cities.json';
import Flashcard from './components/Flashcard';
import NextButton from './components/NextButton';

const App  = () => {
  const [cities] = useState(citiesData) // establishing the cities data
  const [currIndex, setCurrIndex] = useState(0); // to manage index of card, starting at 0
  const [flipped, setFlipped] = useState(false) // to manage the flipping of the car

  const handleFlip = () => {
    setFlipped(!flipped); // set this to the opposite val
    console.log(flipped);
  }

  function getRan(){
    let random;
    do {
      random = Math.floor(Math.random() * 10); // to get random index
    } while (random === currIndex);
    return random;
  }

  function handleNext(){
    setFlipped(false);
    setCurrIndex(getRan());
  }

  return (
   <div className = "app">
    <h1>Guess the city!</h1>
    <h3>Can you tell what city this is based on the skyline?</h3>
    <h5>Number of cards: 10.</h5>
    <div className = "flashcard" onClick = {handleFlip}>
      <Flashcard city = {cities[currIndex]} flipped = {flipped} handleFlip = {handleFlip} />
    </div>
    <NextButton handleNext = {handleNext} />

   </div>
  )
}

export default App
