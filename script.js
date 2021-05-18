const quizData = [{
    question: "Who is the President of Lithuania ?",
    a: "Smetona",
    b: "Brazauskas",
    c: "Simonyte",
    d: "Grybauskaite",
    e: "Nauseda",
    correct: "e",
  }, {
    question: "How many people live in Lithuania ?",
    a: "1 000 000",
    b: "1 250 000",
    c: "3000 000",
    d: "2 700 000",
    e: "4000 000",
    correct: "c",
  }, {
    question: "What virus is currently spreading in the world ?",
    a: "Malaria",
    b: "Corona",
    c: "Ebola",
    d: "Plague",
    e: "Flu",
    correct: "b",
  }, {
    question: "Which of these cars is the most expensive ?",
    a: "BMW",
    b: "Porsche",
    c: "Moskvic",
    d: "Bentley",
    e: "Audi",
    correct: "d",
  }];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const e_text = document.getElementById("e_text");
  
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
  
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
  }
  
  function getSelected() {
    let answer = undefined;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h1>Your correct answers ${score} of ${quizData.length} questions !</h1><button onClick="location.reload();">Try again</button>`;
      }
  
    }
  });
  
  