const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", 
"true",
"40",
"Trajectory",
"3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');
  candidateName = input.question("What is your name? ");
  return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const input = require('readline-sync');

  for(i = 0; i < questions.length; i++) {
  let candidateAnswer = [input.question(questions[i])];
  candidateAnswers.push(candidateAnswer);
  }
  }


function gradeQuiz(candidateAnswers) {
  let correctCandidateAnswers = [];
  let incorrectCandidateAnswers = [];
  console.log(`Candidate Name: ${candidateName}`);
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (i = 0; i < correctAnswers.length; i++) {
    console.log(`${i+1}) ${questions[i]}`);
    if (String(candidateAnswers[i]).toLowerCase() === String(correctAnswers[i]).toLowerCase()) {
        correctCandidateAnswers.push(candidateAnswers[i]);
        // console.log(correctCandidateAnswers);
        console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}`);
   } else {
    incorrectCandidateAnswers.push(candidateAnswers[i]);
    // console.log(incorrectCandidateAnswers);
    console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}`);
   }
}

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let numberCorrectAnswers = correctCandidateAnswers.length;
  let numberIncorrectAnswers = incorrectCandidateAnswers.length;
  let totalNumberAnswers = candidateAnswers.length;

  grade = numberCorrectAnswers/(totalNumberAnswers)*100;

  if (grade >= 80) {
    console.log(`>>>>> Overall Grade: ${grade}%. (${numberCorrectAnswers} of 5 responses correct.)\n>>>>> Status: PASSED.`);
  } else {
    console.log(`>>>>> Overall Grade: ${grade}%. (${numberCorrectAnswers} of 5 responses correct.)\n>>>>> Status: FAILED.`);
  }

  return grade;
}



function runProgram() {
  let candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName}.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// console.log(`
// Candidate Name: ${candidateName}
// 1) ${questions[0]}
// Your Answer: ${candidateAnswers[0]}
// Correct Answer: ${correctAnswers[0]}

// 2) ${questions[1]}
// Your Answer: ${candidateAnswers[1]}
// Correct Answer: ${correctAnswers[1]}
// 3) ${questions[2]}
// Your Answer: ${candidateAnswers[2]}
// Correct Answer: ${correctAnswers[2]}

// 4) ${questions[3]}
// Your Answer: ${candidateAnswers[3]}
// Correct Answer: ${correctAnswers[3]}

// 5) ${questions[4]}
// Your Answer: ${candidateAnswers[4]}
// Correct Answer: ${correctAnswers[4]}

// >>>>> Overall Grade: ${gradeQuiz(candidateAnswers)}% (${correctAnswers.length} of 5 responses correct.)
// >>>>> Status: `);

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};