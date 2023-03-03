var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
var i = 0;

for( i = 0; i < people.length; i++){
    if(people[i] === 'Lola' || people[i] === 'Phil'){
        refused.textContent += people[i] + ', ';
    }else{
        admitted.textContent += people[i] + ', ';
    }
}

//essas ultimas duas linhas servem para tirar a virgula e colocar um ponto no lugar.
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';