

let ca = document.getElementsByClassName('caja');

function tog(){
 this.classList.toggle('naranja');
}

for(let i = 0 ; i<= ca.length ; i++){
    ca[i].addEventListener('click',tog)
}


