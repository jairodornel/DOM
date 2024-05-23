//Funções para mudar cor do body

function Azul(){

    var cor = document.body; 

    cor.style.background = 'blue';  

}

function Vermelho() {

    var cor1 = document.body;

    cor1.style.background = 'red';

}

function Branco() {

    var cor2 = document.body;

    cor2.style.background = ' white'; 
}

function texto() {

    document.getElementById('text').innerText = "O Brasil é um pais emergente "; 


}

function apaga() {

    document.getElementById('text').innerText= " ";
}

function aumenta() {

    document.getElementById('text').style.fontSize="large"; 
    document.getElementById('text').style.textAlign="center";
}

function diminui() {

    document.getElementById('text').style.fontSize="small"; 
    document.getElementById('text').style.textAlign="right";
}

