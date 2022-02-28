const questionList = {
    "questions" :
    [
        [
            {"q" : "What is the succesor to the Lamborghini Gallardo?"},
            {"one" : "Murcielago"},
            {"two" : "Huracan"},
            {"three" : "Aventador"},
            {"four" : "Performante"}
        ],
        [
            {"q" : "How many cylinders does an Audi RS3 have?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "What is the chassis designation for a 2016 Porsche 911?"},
            {"one" : "718"},
            {"two" : "981"},
            {"three" : "991.1"},
            {"four" : "991.2"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
        [
            {"q" : "?"},
            {"one" : "4"},
            {"two" : "5"},
            {"three" : "6"},
            {"four" : "8"}
        ],
    ]
}

// Why are you cheating
let answerKey = [2, 2, 3, 1, 1, 1, 1, 1, 1, 1];
let timeNum = 75;
let i = 0;

const highScore = {name: "Jack", score: 9000}
const highScore2 = {name: "Jackson", score: 9001}
const highScoreList = [];
var highScores = document.getElementById("highScores");
highScoreList.push(highScore);
highScoreList.push(highScore2);
let j = 0;
let listElement = document.createElement("ol");
while (j < highScoreList.length) {
    let tmp = document.createElement("li");
    tmp.innerHTML = highScoreList[j].name + " - " + highScoreList[j].score;
    listElement.appendChild(tmp)
    j++;
}
highScores.appendChild(listElement);
console.log(highScoreList);

var questionPrompt = document.getElementById("questionArea");
var answerVals = document.getElementsByClassName("answerButton");
var answerContainer = document.getElementById("answersContainer");
var timeLeft = document.getElementsByClassName("Time")[0];
let questions = questionList.questions;



function startQuiz() {
    i = 0;
    timeLeft.innerHTML = "Time: 75";
    startTimer();
    document.getElementById("startQuiz").style.display = "none";
    answerContainer.style.display = "block";
    console.log("qll: " + Object.keys(questionList).length)
    console.log("qlql: " + questionList.questions.length)
    // while (i < questionList.questions.length) {
        console.log("questions: " + questions[i])
        let questionContent = questions[i];
        questionPrompt.innerHTML = questionContent[0].q;
        answerVals[0].innerHTML = questionContent[1].one;
        answerVals[1].innerHTML = questionContent[2].two;
        answerVals[2].innerHTML = questionContent[3].three;
        answerVals[3].innerHTML = questionContent[4].four;
        
    // }
}

function answer1() {
    if (answerKey[i] === 1) { rightAnswer(); } else { wrongAnswer(); }
}
function answer2() {
    if (answerKey[i] === 2) { rightAnswer(); } else { wrongAnswer(); }
}
function answer3() {
    if (answerKey[i] === 3) { rightAnswer(); } else { wrongAnswer(); }
}
function answer4() {
    if (answerKey[i] === 4) { rightAnswer(); } else { wrongAnswer(); }
}

function rightAnswer() {
    i++;
    nextQuestion();
}
function wrongAnswer() {
    i++;
    timeNum -= 10;
    timeLeft.innerHTML = "Time: " + timeNum;
    nextQuestion();
}
function nextQuestion() {
    if (i < questionList.questions.length) {
        console.log("questions: " + questions[i])
        let questionContent = questions[i];
        questionPrompt.innerHTML = questionContent[0].q;
        answerVals[0].innerHTML = questionContent[1].one;
        answerVals[1].innerHTML = questionContent[2].two;
        answerVals[2].innerHTML = questionContent[3].three;
        answerVals[3].innerHTML = questionContent[4].four;
    }
    else { endGame() }
}
function startTimer() {
    
}
function endGame() {

}
function showScores() {

}