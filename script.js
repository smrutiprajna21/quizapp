function startQuiz(){
    window.location.href = "quiz.html"
    showQuestion();
}


let questions = [
{
question: "What is the capital of India?",
options: ["Delhi","Mumbai","Kolkata","Chennai"],
answer: "Delhi"
},
{
question: "Which language is used for web?",
options: ["Python","JavaScript","C","Java"],
answer: "JavaScript"
},
{
question: "What is the capital of odisha?",
options: ["cuttack","bhubaneswar","Kolkata","Chennai"],
answer: "bhubaneswar"
},
{
question: "What is the national animal of India?",
options: ["Tiger","Lion","Elephant","Leopard"],
answer: "Tiger"
}
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {

let q = questions[currentQuestion];

document.getElementById("question").innerText = q.question;

document.getElementById("opt1").value = q.options[0];
document.getElementById("opt1_label").innerText = q.options[0];

document.getElementById("opt2").value = q.options[1];
document.getElementById("opt2_label").innerText = q.options[1];

document.getElementById("opt3").value = q.options[2];
document.getElementById("opt3_label").innerText = q.options[2];

document.getElementById("opt4").value = q.options[3];
document.getElementById("opt4_label").innerText = q.options[3];

}

function getSelected(){

let answers = document.getElementsByName("answer");

for(let i=0;i<answers.length;i++){
if(answers[i].checked){
return answers[i].value;
}
}

}

function nextQuestion(){

let selected = getSelected();

if(selected == questions[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion < questions.length){
showQuestion();
}
else{
alert("Quiz Finished! Your Score: " + score);
}

}


if(document.getElementById("question")){
    showQuestion();
}
