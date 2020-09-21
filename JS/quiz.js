const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "What is the name of Han Solo’s ship?",
      answers: {
        a: "Century Falcon",
        b: "Millennium Eagle",
        c: "Millennium Falcon"
    },
      correctAnswer: "c"
    },
    {
      question: "The young Jedi Knight, Anakin Skywalker, becomes who in Star Wars?",
      answers: {
        a: "Grand Moff Tarkin",
        b: "Darth Tyranus",
        c: "Darth Vader"
      },
      correctAnswer: "c"
    },
    {
      question: "The planet Kashyyyk is home to who?",
      answers: {
        a: "Trandoshians",
        b: "Sand People",
        c: "Yoda",
        d: "The Wookiees"
      },
      correctAnswer: "d"
    },
    {
        question: "In Revenge of the Sith and Attack of the Clones what color is Yoda’s lightsaber?",
        answers: {
          a: "Blue",
          b: "Yellow",
          c: "Green"
      },
        correctAnswer: "c"
      },
      {
        question: "The X-wing fighter has how many engines?",
        answers: {
          a: "12",
          b: "1",
          c: "4"
        },
        correctAnswer: "c"
      },
      {
        question: "Jedi Council consists of how many members?",
        answers: {
          a: "7",
          b: "42",
          c: "6",
          d: "12"
        },
        correctAnswer: "d"
      },
      {
        question: "What were Luke’s aunt and uncle’s jobs on Tatooine?",
        answers: {
          a: "Dryness Ranchers",
          b: "Moisture Farmers"
      },
        correctAnswer: "b"
      },
      {
        question: "How many languages is C-3P0 fluent in?",
        answers: {
          a: "C-3PO is illiterate",
          b: "5",
          c: "Over 6 million"
        },
        correctAnswer: "c"
      },
      {
        question: "Who are the masters of the Dark Side that want to rule the galaxy?",
        answers: {
          a: "The Jedi",
          b: "Republicans",
          c: "Democrats",
          d: "The Sith"
        },
        correctAnswer: "d"
      },
  ];

  buildQuiz();
  function buildQuiz(){
    const output = [];  
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                  );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                  );
                }
              );         
              quizContainer.innerHTML = output.join('');
}
myQuestions.forEach( (currentQuestion, questionNumber) => {
  });

  const answers = [];
  for(letter in currentQuestion.answers){
    answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
      quizContainer.innerHTML = output.join('');
      function showResults(){

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
      
        // keep track of user's answers
        let numCorrect = 0;
      
        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {
      
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
      
            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
          }
        });
      
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      }

      const answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      let numCorrect = 0;
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
      
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });     

const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

