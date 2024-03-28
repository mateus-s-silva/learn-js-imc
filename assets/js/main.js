function form(){
    const form = document.querySelector('form');
    
    form.addEventListener('submit', recebeEventoForm);
}

function exibeResultado(mensagem, isValid){
    const resultado = document.querySelector('.resultado2');
    
    const corMensagem = isValid ? '#90EE90' : '#F08080';

    resultado.innerHTML = `<p>${mensagem}</p>`

    resultado.setAttribute('style', `background-color: ${corMensagem}`);
}

function getImc(peso, altura){
    const imc = Number(peso) / (Number(altura) ** 2);

    return imc.toFixed(2); 
}

function getNivelImc(imc){

    const nivelImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc > 39.9) return nivelImc[5];
    if(imc > 34.9) return nivelImc[4];
    if(imc > 29.9) return nivelImc[3];
    if(imc > 24.9) return nivelImc[2];
    if(imc >= 18.5) return nivelImc[1];
    if(imc < 18.5) return nivelImc[5];
}

function recebeEventoForm(evento){
    evento.preventDefault();


    const peso = evento.target.querySelector('#peso');
    const altura = evento.target.querySelector('#altura');

    const imc = getImc(peso.value, altura.value);
    const nivel = getNivelImc(imc);

    
    if(!peso.value ^ !altura.value){
        peso.value ? exibeResultado('É preciso inserir a altura', false): exibeResultado('É preciso inserir o peso', false);
        return;
    }

    if(!peso.value && !altura.value){
        exibeResultado('É preciso inserir o peso e a altura', false);
        return;
    }

    if(isNaN(Number(peso.value)) || isNaN(Number(altura.value))){
        exibeResultado('Os campos precisam ser um número', false);
        return;
    }

    exibeResultado(`Seu IMC é ${imc} (${nivel})`, true);
}

form();