let numberInput = document.getElementById('num-input');
let runbutton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMul() {
     let number = Number(numberInput.value);
     let outputHtml = '';

     for(let i = 1; i <= 12; i++) {
         outputHtml += '<p>';
         outputHtml += number + 'x' + i + '=' + (number * i);
         outputHtml += '</p>';
     }

     output.innerHTML = outputHtml;
}

runbutton.addEventListener('click', printMul);