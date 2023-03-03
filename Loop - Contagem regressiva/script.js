var output = document.querySelector('.output');
output.innerHTML = '';

for(var i = 10; i >= 0; i--){
    console.log(i);
    var para = document.createElement('p');
    if(i === 10){
        para.textContent = 'Contagem regressiva ' + i;
    }
    else if( i === 0){
        para.textContent = 'Fim';
    }
    else{
        para.textContent = i;
    }

    output.appendChild(para);
}
