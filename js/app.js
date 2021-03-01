function tecnologias() {

    const galeria = document.querySelector('#tecnologias__lista');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `/img/${i}.svg`;
        imagen.classList.add(`skils__imagen`)
        imagen.classList.add(`skils__imagen${i}`)
        imagen.dataset.imagenId = i;

        const contenedorDiv = document.createElement('DIV')
        contenedorDiv.classList.add('tecnologias__contenedor')


        /* const lista = document.createElement('LI');
        lista.appendChild(imagen); */
        contenedorDiv.appendChild(imagen)
        galeria.appendChild(contenedorDiv)

    }
        
}

tecnologias();


        // GSAP custom code goes here
gsap.registerPlugin(ScrollTrigger);   
const tl = gsap.timeline();

gsap.to('.skils__imagen', {scrollTrigger: '.skils__imagen', rotationX:360, duration: 3,})
/* gsap.from('.skils__imagen', {scrollTrigger: '.skils__imagen', duration: 1, opacity: 1,})
 */


    




