/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [
      {
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
          "the room of requirement",
          "the location of everyone in hogwarts",
          "the password to Dumbledore's office",
          "hidden treasure"
        ],
        correctAnswer: "the location of everyone in hogarts"
      },
      {question: "What does felix felicis do?",
       answers: ["poisons you",
                "gives you good luck",
                "makes you fall in love",
                "brings someone back from the dead"
            ],
        correctAnswer: "gives you good luck"
    },
    {question: "How are Hogwarts students sorted into their house?",
     answers: ["written placemetn test", 
              "battle a troll",
              "the sorting hat",
              "decided at birth"
            ],
        correctAnswer: "the sorting hat"
    },
    {question:"What is Lord Voldemort’s boggart?",
     answers: ["his mother's dead body",
               "his own dead body",
               "albus dumbledore",
               "harry potter"
            ],
        correctAnswer: "his own dead body"}
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
  };

function startPage(){
    return "<form><input type='radio' id='start'><label for='start'>start</label></form>"
    $("form").click(function (event){
        questions.quizStarted = true
        render()
    })
    
}
  function render(){
      //render the question in the DOM
      let page = ""
      if(store.quizStarted === false){
          page = startPage; 
          }
      else{
          page = questionSelect;
      }
      
      $("main").html(page);
  }

  function questionSelect(){
    return "<p>working so far</p>"
  }

  
  function main(){
      
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