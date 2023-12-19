# Hangman Game 

## Table of Contents

- [Project Overview](#project-overview)
- [Guide & Illustration](#guide--illustration)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)


## Project Overview
Hangman Game is a project built using React and Typescript to stimulate the hanging man game. Players are allowed 6 guesses to figure out the word before the hangman passes away. 

Key features:
- Fetch random words from a dataset of common English words corpora
- Keep track of successfully guessed words using word illustration
- Style the hanging man based on the number of false guesses
- Support user-friendly interface for playing and enjoying the game 


## Guide & Illustration
1. Set up

![image](https://github.com/lvhoaa/ReactTS_HangmanGame/assets/87745938/4d12a61d-86c9-45c6-8661-99b395e52543)

2. Play


The word is fetched from a corpora of English common words.


Here, the sample word is "money"


In each choice, if you are correct, the letter will appear. (click "M")

![image](https://github.com/lvhoaa/ReactTS_HangmanGame/assets/87745938/ff24f5e8-6572-48de-9340-c0b93da1f2c6)


If not, you will be punished. (click "K")

![image](https://github.com/lvhoaa/ReactTS_HangmanGame/assets/87745938/7e9f5738-913d-4fed-b169-50191b710506)

3. Iterate

4. Win

![image](https://github.com/lvhoaa/ReactTS_HangmanGame/assets/87745938/41ed8212-bb8e-4a53-99e1-0b5b5b98110c)

Or Lose 

![image](https://github.com/lvhoaa/ReactTS_HangmanGame/assets/87745938/e04a1f40-d6a4-45e4-8728-753b401eeb89)

## Installation 

To run the Hangman Game locally, follow these steps:

1. Clone the repository or download the source code.
   ```bash
   git clone https://github.com/lvhoaa/ReactTS_HangmanGame.git

2. Navigate to the project directory in your terminal.

3. Install the dependencies by running the following command:
   ```bash
   npm install
4. Set up the environment variables. Create a .env file in the root directory and add the necessary configuration variables such as database connection details, API keys, and any other required settings.

5. Run the application using the following command:
   ```bash
   npm run dev 
6. Open your web browser and visit http://localhost:5173 to access the Hangman Game server.

## Contributing
Contributions to this project are welcome! If you have any suggestions, bug fixes, or new features to propose, please open an issue or submit a pull request. Let's make the Online Shopping Website even better together!

## License
This project is licensed under the MIT License. You can find the full license text in the LICENSE file.
