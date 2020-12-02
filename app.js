/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [{
      question: 'How does Harry catch his first golden snitch?',
      answers: [
        "With his broom",
        "In his mouth",
        "In his hat",
        "With his feet"
      ],
      correctAnswer: 'In his mouth'
    },
    {
      question: 'What does the Marauder’s map show?',
      answers: [
        "The room of requirement",
        "The location of everyone in hogwarts",
        "The password to Dumbledore's office",
        "Hidden treasure"
      ],
      correctAnswer: "The location of everyone in hogwarts"
    },
    {
      question: "What does felix felicis do?",
      answers: ["Poisons you",
        "Gives you good luck",
        "Makes you fall in love",
        "Brings someone back from the dead"
      ],
      correctAnswer: "Gives you good luck"
    },
    {
      question: "How are Hogwarts students sorted into their house?",
      answers: ["Written placement test",
        "Battle a troll",
        "The sorting hat",
        "Decided at birth"
      ],
      correctAnswer: "The sorting hat"
    },
    {
      question: "What is Lord Voldemort’s boggart?",
      answers: ["His mother's dead body",
        "His own dead body",
        "Albus dumbledore",
        "Harry potter"
      ],
      correctAnswer: "His own dead body"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  correctStatement: "Awesome! You got that one right",
  incorrectStatement: "Uh Oh! Looks like you didn't get that one right. The correct answer is: "
};

function generateStartPage() {
  let startPageHtml = `<div class="group" >
  <div class="startPage">
      <h2>The ultimate Harry Potter quiz!</h2>
      <h4>How much do you know about the Wizarding World of Harry Potter?
          Take the ultimate Harry Potter quiz to find out!
      </h4>
      </div>
      <div class="startPage">
          <button type="button" id="start">Start Quiz</button>
      </div>
  </div>`
  return startPageHtml
}

function handleQuizStart(){
  // $("#start").click(function(event){
  $("main").on("click", "#start", function(event){
   store.quizStarted = true
   render()
  })
}

function handleNextQuestionSubmit(){
  console.log(store)
  if($(`input[type=button][name=submitAnswer]:clicked`)){
$("main").on("click", "#nextQuestion", function(event){
  event.preventDefault()
  store.questionNumber += 1
  render()
})
}
}

function handleAnswerSubmit(){
  $("main").on("submit", "#question", function(event){
    event.preventDefault()
    //check the answer 
    let submittedAnswer = $(`input[type="radio"][name="answer"]:checked`).val()
    //console.log(submittedAnswer)
    let pageAnswer = store.questions[store.questionNumber].correctAnswer
    //get value of radio button 
    //compare value to correct answer in store for that question
    console.log(store.score)
    let correctStatement = `<p>Awesome! You got that one right</p>`
    let incorrectStatement = `<p>Uh Oh! Looks like you didn't get that one right. The correct answer is: </p>` 
    if(submittedAnswer === pageAnswer){
      store.score+=1;
      $("#correctStatement").show()
      $("#submitAnswer").prop("disabled", true)
    }
    else{
      $("#incorrectStatement").show()
      $("#submitAnswer").prop("disabled", true)
    }  
    //submittedAnswer === question.correctAnswer ? console.log("that was right") : console.log("that was wrong")
    //disable submit answer button so that answers are submited once   
    //if the answerHmtl is correct, generate hmtl for correct answer response
    //insert answerHtml into answerArea div 
    //if answer is incorrect, generate html for incorrect answer response
    //store.questionNumber += 1
    $("#nextQuestion").prop("disabled", false)
  })
  
}

function handleQuizRestart(){
  $("main").on("click", "#startOver", function (event){
    store.quizStarted = false
    store.questionNumber = 0
    store.score = 0
    render()
  })
}

function generateQuestionPage() {
  let question = store.questions[store.questionNumber]
  let answers = question.answers.map((answer,idx) => {
    // if(idx === 0){
    //   return `<input type="radio" id="answer${idx}" name="answer" required value="${answer}">
    //         <label for="answer${idx}">${answer}</label><br>`
    // }
    return `<input type="radio" id="answer${idx}" name="answer" required value="${answer}">
            <label for="answer${idx}" class="label">${answer}</label><br>`
  })
  return `<div class="HUD">
  <div class="status"><span class="currentQuestion">Current Question: ${store.questionNumber + 1} out of ${store.questions.length} </span></div>
  <span class="score">Current Score: ${store.score} </span>
  </div>
  <div class="mainPage">
  <form id="question">
    <h2>${question.question}</h2>
    ${answers.join("")}

    <input type="submit" id="submitAnswer" name="submitAnswer" value="Submit Answer"></button>
    <input type="submit" id="nextQuestion" value="Next question" disabled></button>
    </form>
    <div class="answerArea">
    <div id="correctStatement">${store.correctStatement}</div>
    <div id="incorrectStatement">${store.incorrectStatement}${question.correctAnswer}</div>
    </div>
  </div>`
}

function generateFinalPage() {
  let finalPageHtml = `<div class="finalPage">
    <h2>Congrats! You completed the quiz</h2>
    <p>Final Score: ${store.score} out of ${store.questions.length}</p>
    <input type= "submit" id="startOver" value="Retake Quiz"></button>
  </div>`
  return finalPageHtml
}


function render() {
  //render the question in the DOM
  let page = ""
  if (store.quizStarted) {
    if (store.questionNumber === store.questions.length) {
      page = generateFinalPage(store)
    } else {
      page = generateQuestionPage(store)
     
    }
  } else {
    page = generateStartPage(store)
  }
  $(`main`).html(page)
  $("#correctStatement").hide()
  $("#incorrectStatement").hide()
}



function main() {
  handleQuizStart()
  handleNextQuestionSubmit()
  handleAnswerSubmit()
  handleQuizRestart()
  render()
}

$(main)

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */