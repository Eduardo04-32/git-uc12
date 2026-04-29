//gurda a prgunta que esta activa

let currentQuestionIndex = 0;

//peg todas as pergubtas do html
/*
document.getElementbyId -->  pega apena um elemento
document.querySelectorAll --> pega todos os elementos de uma classe e retorna uma lista(tipo array)
*/ 

const questions = document.querySelectorAll(".quiz")
// função para ativar a proxima pergunta

function activeQuestion(){
    /*
    questions[currentQuestionIndex] --> acessa a pergunta atual dentro da pergunta
    classList.add --:> adiciona a classe ativa
    esse class faz a pergunta aparecer n tela (via CSS)
    */ 
    questions[currentQuestionIndex].classList.add("active")
}

//função chamada para quando cliclar em uma resposta
function answer(isCorrect){
    //se a resposta estiver correta
    if(isCorrect) {
        /*
        classList.renove("active") -> remove a class
        isso faz a pergubta atual sumir da tela
        */

        questions[currentQuestionIndex].classList.remove("active")

        /*
        avança par a proxima pergunta 
        currentQuestionIndex + 1 -> 
        */
       currentQuestionIndex = currentQuestionIndex + 1;

       activeQuestion();

    }else{
        console.log("Eroooouuuu"); 
    }
}

const buttons = document.querySelectorAll(".quiz-option");

for (let i = 0; i < buttons.length; i ++){
    
    buttons[i].addEventListener("click", () => {

        const isCorrect = buttons[i].classList.contains("correct");

        answer(isCorrect);
        })
}    