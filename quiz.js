const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
    question: "Aaron Hasenei is currently completing a PhD in what discipline?",
    answers:{
    a:"Zoology",
    b:"Environmental Science",
    c:"Marine Biology",
    d:"Marine ecosystem management"
    },
    correctAnswer:"c"
    },
    {
    question: "Where does Aaron work?",
    answers:{   
    a:"AIMS",
    b:"Cairns aquarium",
    c:"Nova Southeastern University",
    d:"James Cook University"
    },
    correctAnswer:"d"
    },
    {
    question: "Aaron's reasearch skills include:",
    answers:{
    a:"Bayesian statistical analysis",
    b:"Electroretinography",
    c:"Genome sequencing",
    d:"Multi-dimensional scaling analysis"
    },
    correctAnswer:"b"   
    },
    {
    question: "Aaron is super passionate about:",
    answers:{
    a:"The environment",
    b:"Wildlife",
    c:"Conservation",
    d:"All of the above"
    },
    correctAnswer:"d"
    }
];

function buildQuiz() {
    const output=[];
    for(i=0; i<quizQuestions.length; i++){
        const answers=[];
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name ="question'+i+'" value = "'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'
                );
        }
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML=output.join('');
}

function showResults() {
var answerContainers = quizContainer.querySelectorAll('.answers');
var numCorrect = 0;
for(i=0; i<quizQuestions.length; i++){
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    if(userAnswer===quizQuestions[i].correctAnswer){
        numCorrect++;
        answerContainers[i].style.color='lightgreen';
    }
        else{
            answerContainers[i].style.color='red';
        }
    }
if(numCorrect===0){
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
}
if(numCorrect===1){
    resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
}
if(numCorrect===2){
    resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses.";
}
if(numCorrect===3){
    resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Aaron pretty well!";
}
if(numCorrect===4){
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Aaron so well!";
}
}
buildQuiz();
submitButton.onclick = function(){
    showResults();
}