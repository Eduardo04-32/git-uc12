// pegar cada elemento qu vamos usar
//vamos pegfar o nossos elemento pelo nosso id

const titulo = document.getElementById("titulo")

const boatao = document.getElementById("btn")

function trocaCor(){
    //
    titulo.style.color = 'red'
   // titulo.style.fontSize = '50px'
}

function mensagem(){
    alert("BUENOS DIA GALERAAAAAA")
}

function trocaMensagem(){
    titulo.textContent = "texto trocado"
}
//adicina uma funão ao buttao
// um evento é uma ação nossa
//addEventListener precisa de dois argumentos
// o primeiro é a ação (o que o dispara uma função)
// o segubndo é a qual função sera disparada 


boatao.addEventListener('click', trocaCor)

function original(){
    titulo.textContent = "Meu titulo"
}

boatao.addEventListener('click', original)