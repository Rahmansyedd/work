let welcomebtn = document.querySelector('button');
welcomebtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('enter name of student');
    welcomebtn.textContent='roll no.1:'+name;

}

var favshow = "game of throns";
console.log(favshow.length)

console.log(favshow[0]);
