type KeyboardProps = {
    letters:string[],
    clickLetter: (letter:string)=>void
}
export function Keyboard({letters,clickLetter}:KeyboardProps){
    return (
        <div className="letters-container">
        {letters.map((letter) => (
          <button
            key={letter}
            className="letter-button"
            onClick={clickLetter(letter)}
            disabled={!letters.includes(letter)}
          >
            {letter}
          </button>
        ))}
        </div>
    )
}