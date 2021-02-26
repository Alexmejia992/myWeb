/* import { gsap } from "gsap/dist/gsap";
console.log(gsap)
 */
/* const tl = gsap.timeline({defaults: {easy: 'power1.out'} });

tl.fromTo('.lexweb', {opacity: 0}, {opacity: 1, duration: 4}); */


/* function iniciarApp(){

}
 */


function tecnologias() {

    const galeria = document.querySelector('#tecnologias__lista');

    for(let i = 1; i <= 10; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `/img/${i}.svg`;
        imagen.classList.add('skils__imagen')
        imagen.dataset.imagenId = i;

        /* const lista = document.createElement('LI');
        lista.appendChild(imagen); */

        galeria.appendChild(imagen)
    }
}

tecnologias();

/* imagenes.forEach(imagen => {
    
}); */