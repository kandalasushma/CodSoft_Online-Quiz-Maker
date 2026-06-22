const questions = [
    {
        question:"What does HTML stand for?",
        options:[
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer:"Hyper Text Markup Language"
    },

    {
        question:"Which language is used for styling webpages?",
        options:[
            "HTML",
            "JAVA",
            "CSS",
            "PYTHON",
        ],
        answer:"CSS"
    },

{
    question:"Which language is used for webpage interactivity?",
    options:[
        "Javascript",
        "C++",
        "Java",
        "SQL",
    ],
    answer:"Javascript"
}
];

let currentQuestion = 0;
let score = 0;
function loadQuestion(){
    document.getElementById("question").innerText = questions[currentQuestion].question;
     
    let optionsHTML ="";

    questions[currentQuestion].options.forEach(option=>{
        optionsHTML += `
        <label>
        <input type="radio" name="answer" value="${option}">
        ${option}
        </label><br><br>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

}
function nextQuestion(){
    let selected = 
    document.querySelector('input[name="answer"]:checked');
    if(!selected) {
        alert("Please select an answer!");
        return;
    }
       if (selected.value === questions[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if(currentQuestion < questions.length){
            loadQuestion();
        }
        else{
            document.getElementById("quiz").style.display="none";
            document.getElementById("result").innerHTML = `<h2>Your Score:${score}/${questions.length}</h2>`;
          }
          }
    
          loadQuestion();