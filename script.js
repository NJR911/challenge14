let main = document.querySelector(".main-countainer")
let thanks = document.querySelector(".thank-you")
let submit = document.getElementById("submit")
let rateIt = document.getElementById("rate-it")
let rating = document.getElementById("rating")
let rates = document.querySelectorAll(".btn")

let chosen;
function rate(e){
    chosen = e.innerHTML;
    document.getElementById("submit").removeAttribute("disabled");
}


submit.onclick = function(){
    thanks.classList.remove("hide")
    main.classList.add('hide')
    document.getElementById("rating").innerHTML = chosen
}

rateIt.onclick = function(){
    thanks.classList.add('hide')
    main.classList.remove('hide')
}

function show1(){
    var elememt = document.getElementById('one');
    if(elememt.style.display == 'none'){
        elememt.style.display = 'block';
    } else{
        elememt.style.display = 'none'
    }
}
function show2(){
    var elememt = document.getElementById('two');
    if(elememt.style.display == 'none'){
        elememt.style.display = 'block';
    } else{
        elememt.style.display = 'none'
    }
}
function show3(){
    var elememt = document.getElementById('three');
    if(elememt.style.display == 'none'){
        elememt.style.display = 'block';
    } else{
        elememt.style.display = 'none'
    }
}
function show4(){
    var elememt = document.getElementById('four');
    if(elememt.style.display == 'none'){
        elememt.style.display = 'block';
    } else{
        elememt.style.display = 'none'
    }
}
function show5(){
    var elememt = document.getElementById('five');
    if(elememt.style.display == 'none'){
        elememt.style.display = 'block';
    } else{
        elememt.style.display = 'none'
    }
}
