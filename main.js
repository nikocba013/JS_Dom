let caja = document.getElementsByTagName('div');

caja[0].textContent = 'Q mirai';

let ca = document.createElement('div');
ca.textContent= 'Holus';
ca.setAttribute('class','caja naranja');
ca.setAttribute('id','id1');

let contenedor = document.getElementById('contenedor');

contenedor.appendChild(ca);

let boton = document.getElementById('fua');

boton.addEventListener('mouseover', ()=>{
    var ca= document.getElementById('id1');
    ca.setAttribute('class','caja');
});


