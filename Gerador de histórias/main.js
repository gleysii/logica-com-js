//seletores
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//função que dá valor aleatório para o array 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);//esse método gera o valor aleatório
  return array[random]; //array recebe vetor aleatório 
}

//variaveis e vetores
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);//evento que dispara clique 

function result() {
    newStory = storyText; // isso é necessário para que a cada click, uma nova história seja gerada, se fosse diretamente no "storyText" daria para gerar apenas uma história de uma vez
    //chamamos a função passando como parâmetros os arrays, que fica armazenado na var
    xitem = randomValueFromArray(insertx);//o resultado em cada caso será um item aleatório de cada array em que é chamado
    yitem = randomValueFromArray(inserty);
    zitem = randomValueFromArray(insertz);
    newStory = newStory.replace(':insertx:', xitem);//por meio do método replace substutituimos o campo demarcado 
    newStory = newStory.replace(':inserty:', yitem);
    newStory = newStory.replace(':insertz:', zitem);
    newStory = newStory.replace(':insertx:', xitem);//chama-se duas vezes porque aparece duas vezes

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + 'stone';
    const temperature =  Math.round(((94-32) * 5) / 9) + 'centigrade';//conversão de temperatura
    newStory = newStory.replace('94 farenheit', temperature);//substituições de texto
    newStory = newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}