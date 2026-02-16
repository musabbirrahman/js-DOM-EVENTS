console.log('external file')

// Option 2
function makeRed(){
    document.body.style.backgroundColor = 'red';  
}

// Option 3 get element by id 
const bntMakeBlue = document.getElementById('btn-make-blue');
    bntMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}