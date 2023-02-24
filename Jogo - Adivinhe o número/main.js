//variáveis
var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

//variáveis dos parágrafos dinâmicos
var palpitesDados = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

//variáveis botão e input
var envioPalpite = document.querySelector('.envioPalpite');
var palpite = document.querySelector('.palpite');

var acumulaPalpites = 1;//contador
var botaoReinicio;

function conferirPalpite(){
    var palpiteUsuario = Number(palpite.value);
    if(acumulaPalpites === 1){//ao dar o primeiro palpite, o texto abaixo aparece pela primeira vez
        palpitesDados.textContent = 'Palpites anteriores: ';
    }
    palpitesDados.textContent = palpitesDados.textContent + palpiteUsuario + ' ';//vai imprimindo um novo número a cada novo palpite

    if(palpiteUsuario === numeroAleatorio){//se o número estiver certo
        ultimoResultado.textContent = 'Parabéns! Você acertou!'
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else if (acumulaPalpites === 10){//se atingir o número de palpites máximo
        ultimoResultado.textContent = 'FIM DE JOGO'
        baixoOuAlto.textContent = '';//esvazia o parágrafo que dá as dicas
        configFimDeJogo();
    }else {//se nenhuma das opções acima 
        ultimoResultado.textContent = 'Errado!'//vai estar errado
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio){
         baixoOuAlto.textContent = 'Seu palpite está muito baixo';//determina se palpite foi baixo
        }else if (palpiteUsuario > numeroAleatorio){
         baixoOuAlto.textContent = 'Seu palpite está muito alto';//ou se foi alto
        }
    }

    acumulaPalpites++;//a var acumula o número de palpites, até dar 10. 
    palpite.value = '';//o espaço do input é limpo
    palpite.focus();//o espaço do imput entra em foco para o usuário dar outro palpite 
}

envioPalpite.addEventListener('click', conferirPalpite);//o que acontece quando o botão é clicado

//quando o jogo acaba
function configFimDeJogo(){
    palpite.disable = true;//o input(...)
    envioPalpite.disable = true;//e o botão são desativados
    botaoReinicio = document.createElement('button');//o botão para reiniciar aparece
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);//o botão reinício aparece
    botaoReinicio.addEventListener('click', reiniciarJogo);//e reinicia o jogo quando clicado
}

//quando o jogo é reiniciado
function reiniciarJogo(){
    acumulaPalpites = 1;//volta para o ciclo 1
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {//todos os paragrafos(...)
      reiniciarParas[i].textContent = '';//recebem o valor vazio
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);//o botão de reinício é removido já que o jogo já foi reiniciado
  
    campoPalpite.disabled = false;//o input e botões são reativados
    envioPalpite.disabled = false;
    campoPalpite.value = '';//o imput é limpo
    campoPalpite.focus();//e recebe foco
  
    ultimoResultado.style.backgroundColor = 'white';//a formatação é limpa 
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;//é dado um número aleatório novamente
}
