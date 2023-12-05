import { useEffect } from "react";

type HangmanWordProps = {
  targetWord: string;
  guessedLetters: string[];
};
export function HangmanWord({ targetWord, guessedLetters }: HangmanWordProps) {
  useEffect(() => {
    if (targetWord.length === guessedLetters.length) {
      alert("You Win");
      console.log("here");
      setTimeout(function () {
        location.reload();
      }, 1000);
    }
  }, [targetWord, guessedLetters]);
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "3rem",
        fontWeight: "bold",
        alignContent: "center",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "monospace",
        justifyContent: "center",
      }}
    >
      {targetWord.split("").map((letter) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
