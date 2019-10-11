let imagensList = [
    'tg.jpg', 'tgjava.jpg', 'tigr.jpeg', 'tigre.jpeg', 'trg.jpeg'
]
let counter = 0;

let corpin = document.querySelector('body');

let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

let pic = document.createElement('img');
pic.setAttribute('src','tigre.jpeg');

let next = document.createElement('h1');
let nextText = document.createTextNode('>');
next.appendChild(nextText);

function init() {
    console.log(corpin, pic);
    corpin.appendChild(pic);
    corpin.appendChild(before);
    corpin.appendChild(pic);
    corpin.appendChild(next);  
    
       
}

before.addEventListener('click', function() {
    if(counter > 0){
        counter = counter - 1;
        pic.setAttribute('src',imagensList[counter])
    } 
})

next.addEventListener('click', function() {
    if(counter < 0){
        counter = counter + 5;
        pic.setAttribute('src',imagensList[counter])
    } 
})

init();