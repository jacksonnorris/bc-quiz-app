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
            {"q" : "What is known as Godzilla?"},
            {"one" : "Nissan Skyline GT-R"},
            {"two" : "Chevrolet Corvette Z06"},
            {"three" : "Lexus LFA"},
            {"four" : "Toyota Supra"}
        ],
    ]
}

// Why are you cheating
let answerKey = [2, 2, 3, 1];
let timeNum = 75;
let i = 0;

var highScoreButton = document.getElementById("viewHighScores");
var highScoreArea = document.getElementById("scoreArea");
highScoreButton.addEventListener('click', showScores);

const highScoreList = [];
var highScores = document.getElementById("highScores");


console.log(highScoreList);

var questionPrompt = document.getElementById("questionArea");
var answerVals = document.getElementsByClassName("answerButton");
var answerContainer = document.getElementById("answersContainer");
var timeLeft = document.getElementsByClassName("Time")[0];
let questions = questionList.questions;

var inputName = document.getElementById("enterName");
var inputNameContainer = document.getElementById("enterNameContainer");


var timer;

function startQuiz() {
    i = 0;
    timeNum = 75;
    timeLeft.innerHTML = "Time: 75";
    startTimer();
    document.getElementById("startQuiz").classList.add("hidden");
    answerContainer.classList.remove("hidden");
    document.getElementById('quizArea').classList.remove('hidden');
    document.getElementById('playAgain').classList.add('hidden');
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
    document.getElementsByClassName('aboutInfo')[0].classList.add('hidden')
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
    timer = setInterval(function() {
        timeNum--;
        timeLeft.innerHTML = "Time: " + timeNum;
        if (timeNum <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000)
}
function endGame() {
    clearInterval(timer);
    answerContainer.classList.add("hidden");
    document.getElementById('quizArea').classList.add('hidden');
    document.getElementById('enterNameContainer').classList.remove("hidden");
    document.getElementById('yourScore').innerHTML = "You Scored: " + timeNum;
}
function showScores() {
    // console.log(event.target)
    if (highScoreArea.classList.contains("hidden")) {
        highScoreArea.classList.remove("hidden");
        let j = 0;
        let listElement = document.createElement("ol");
        while (j < highScoreList.length) {
            let tmp = document.createElement("li");
            tmp.innerHTML = highScoreList[j].name + " - " + highScoreList[j].score;
            listElement.appendChild(tmp)
            j++;
        }
        // setTimeout(function() {
            try { highScores.removeChild(highScores.firstChild); } catch(err) {console.log(err)}
        //  }, 20000);
        highScores.appendChild(listElement);
    }
    else {  highScoreArea.classList.add("hidden"); }
}
function submitName() {
    if (inputName.value != null) {
        var newHighScore = {name: inputName.value, score: timeNum}
        highScoreList.push(newHighScore);
        highScoreList.sort(function(a,b){
            return b.score - a.score;
        });
        highScoreArea.classList.add("hidden");
        showScores();
        inputNameContainer.classList.add('hidden');
        // highScoreArea.classList.remove("hidden");
        document.getElementById('playAgain').classList.remove('hidden');
    }
}
function playAgain() {
    highScoreArea.classList.add("hidden");
    startQuiz();
}
