import React, { useEffect, useState } from "react";
import "./App.css";
import { Keyboard } from "./components/Keyboard";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import data from "./data/commonEnglish.json"; // data from https://github.com/dariusk/corpora/blob/master/data/words/common.json

function App() {
  // SAMPLE: const targetWord = "money";
  // SAMPLE: const keyword = ['m','o','n','e','y']

  // Get random words from corpora
  let keyword: string[] = ["m", "o", "n", "e", "y"];
  const [targetWord, setTargetWord] = useState<string>("money");
    useEffect(()=>{
      const ind:number = Math.floor(Math.random()*data.commonWords.length);
      setTargetWord(data.commonWords[ind]
      )
  },[]);

  keyword = targetWord.split("");
  const fullAlphabets: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [letters, setLetters] = useState<string[]>([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  const [cntFalse, setCntFalse] = useState<number>(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Function runs when a letter in the keyboard is clicked
  const clickLetter = (letter: string) => {
    return (event: React.MouseEvent) => {
      const ind: number = letters.indexOf(letter);
      const newletters: string[] = [...letters];
      newletters.splice(ind, 1);
      setLetters(newletters);

      if (keyword.includes(letter)) {
        console.log("good guess");
        setGuessedLetters((curr) => [...curr, letter]);

      } else {
        console.log("false bro");
        setCntFalse(cntFalse + 1);

        if (cntFalse === 5) {
          alert("You Lose");
          setGuessedLetters(fullAlphabets);
          setTimeout(function () {
            location.reload();
          }, 3000);
        }
      }
    };
  };

  return (
    <div className="container">
      <h1>Hangman Game</h1>
      <div className="guesses">Number of false guesses: {cntFalse} / 6</div>
      <br />
      <HangmanDrawing cntFalse={cntFalse} />
      <HangmanWord targetWord={targetWord} guessedLetters={guessedLetters} />
      <br />
      <br />
      <Keyboard letters={letters} clickLetter={clickLetter} />
    </div>
  );
}

export default App;
