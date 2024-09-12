const quiz = [
    {
        title:"JavaScript using quiz Application",
        question:"Html is________________language",
        option_a:"Hyper text Markup lanuage",
        option_b:"object",
        option_c:"object-orinted",
        option_d:"good",
    },
    {
        title:"JavaScript using quiz Application",
        question:"Html which is bigest Heading",
        option_a:"h2",
        option_b:"h4",
        option_c:"h5",
        option_d:"h1",
    },
    {
        title:"JavaScript using quiz Application",
        question:"Css is fullform",
        option_a:"Hyper text Markup lanuage",
        option_b:"Cascading style sheet",
        option_c:"object-orinted",
        option_d:"good",
    },
    {
        title:"JavaScript using quiz Application",
        question:"what is Html work it",
        option_a:"Stucture",
        option_b:"object",
        option_c:"object-orinted",
        option_d:"good",
    }
]

const questionTag=document.querySelector(".question-tag");

console.log(questionTag);
console.log(questionTag.textContent);

const  question=document.querySelector(".Question");

console.log(question);
console.log(question.textContent);

const option_a=document.querySelector("#text-option-a");
console.log(option_a);
console.log(option_a.textContent);

const option_b=document.querySelector("#text-option-b");
console.log(option_b);
console.log(option_b.textContent);

const option_c=document.querySelector("#text-option-c");
console.log(option_c);
console.log(option_c.textContent);

const option_d=document.querySelector("#text-option-d");
console.log(option_d);
console.log(option_d.textContent);

const answer=document.querySelector(".answer");

const submit=document.querySelector(".submit");

let currentQuestion=0;
let score=0;

console.log(quiz[currentQuestion].title);
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].option_a);
console.log(quiz[currentQuestion].option_b);
console.log(quiz[currentQuestion].option_c);
console.log(quiz[currentQuestion].option_d);

questionTag.textContent=quiz[currentQuestion].title;
question.textContent=quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion].option_a;
option_b.textContent=quiz[currentQuestion].option_b;
option_c.textContent=quiz[currentQuestion].option_c;
option_d.textContent=quiz[currentQuestion].option_d;

submit.addEventListener("click",()=>{
    let checkedAns=document.querySelector('input[type="radio"]:checked');
    
    console.log(checkedAns);

    if(checkedAns==null){
        alert("Please select an option");
    }else{
        if(checkedAns.nextElementSibling.textContent==quiz[currentQuestion].answer){
            score++;
        }
    }
    currentQuestion++;
    if(currentQuestion<quiz.length){
        questionTag.textContent=quiz[currentQuestion].title;
       question.textContent=quiz[currentQuestion].question;
       option_a.textContent=quiz[currentQuestion].option_a;
       option_b.textContent=quiz[currentQuestion].option_b;
       option_c.textContent=quiz[currentQuestion].option_c;
       option_d.textContent=quiz[currentQuestion].option_d;
    }else{
        alert( "yourscore " + score );
        location.reload();
    }
})