const current_score = document.getElementById("score-span");
const playground = document.getElementById("wrapper");
const questionArea = document.getElementById("area")

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
  {
    quiz: ["foreign", "national", "ethic"],
    options: ["mad", "exotic"],
    correct: 2,
  },
  {
    quiz: ["assume", "insite", "weather"],
    options: ["forecast", "sustainable"],
    correct: 1,
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["charity", "rapid"],
    correct: 2,
  },
];

var score = 0;
current_score.textContent = score;

function questionPopulate() {
  questions.forEach((question) => {

    // div for each quiz questions
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box"); 

    const pen = document.createElement("h3");
    pen.textContent = "🕸️";
    questionBox.append(pen);

    question.quiz.forEach((tips) => {
      const questionTips = document.createElement("p");
      questionTips.textContent = tips;
      questionBox.append(questionTips);
    });

    // div for option buttons
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option-div");
    questionBox.append(optionDiv);
    
    // div for showing result
    const result_div = document.createElement('div')
    result_div.classList.add('result_div')

    question.options.forEach((option, optionIndex) => {
      const optionButton = document.createElement("button");
      optionButton.addEventListener("click", () =>
        checked(result_div,optionDiv,optionIndex,question.correct)
      );
      optionButton.classList.add("option-btn");
      optionButton.textContent = option;
        
      optionDiv.append(optionButton);
    });


    playground.append(questionBox);
    questionBox.append(result_div)
  });
}

function checked(result_div,optionDiv,item,  answer) {
  if (item + 1 === answer) {
    score++;
    current_score.textContent = score;
    result_div.classList.add('green')
    result_div.textContent = "Right answer :)"
  } else {
    score--;
    current_score.textContent = score;
    result_div.classList.add('red')
    result_div.textContent = "Wrong answer!"
  }
  optionDiv.querySelectorAll('button')[0].disabled = true
  optionDiv.querySelectorAll('button')[1].disabled = true
}

questionPopulate();
