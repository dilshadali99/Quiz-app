const questions = [
    {
        'que': 'Which of the fllowing is a markup language',
        'a': 'HTML',
        'b': 'Javascript',
         'c': 'C++',
         'd':'Java',
         'correct':'a'
    },
     
    {
        'que': 'Which of the fllowing is a programing language',
        'a': 'HTML',
        'b': 'Sql',
         'c': 'C++',
         'd':'Css',
         'correct':'c'
    },
     
    {
        'que': 'Which of the fllowing is used to style web pages',
        'a': 'HTML',
        'b': 'Javascript',
         'c': 'CSS',
         'd':'Java',
         'correct':'c'
    },
     
    {
        'que': 'Which of the fllowing is not a programing language',
        'a': 'HTML',
        'b': 'Javascript',
         'c': 'C++',
         'd':'Java',
         'correct':'a'
    }
     
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");


const loadQuestion = ()=>{
    if(index===total){
        return endQuiz()
    }
    else{
        reset();
    }
   
    const data = questions[index];
     queBox.innerText = `${index+1}) ${data.que}`;
     optionInputs[0].nextElementSibling.innerText = data.a;
     optionInputs[1].nextElementSibling.innerText = data.b;
     optionInputs[2].nextElementSibling.innerText = data.c;
     optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return
}

const getAnswer = ()=>{
    let answer;
     optionInputs.forEach(
        (input) => {
          if(input.checked){
           answer = input.value;
          }
          
     })
     return answer;
}

const reset = ()=>{
   optionInputs.forEach(
     (input) =>{
        input.checked = false;
     }
   )
}

const endQuiz = ()=>{
     document.getElementById('box').innerHTML = `
     <div style = "text-align:center">
     <h3> Thank you for playing the Quiz</h3>
      <h2>Total questions ${total} <br> correct ${right}
      <br> Incorrect ${total-right}
      </h2>
      </div>`
}

function next(){

    index++;
    loadQuestion();
    
}
function prev(){
    index--;
    loadQuestion()
}

loadQuestion();