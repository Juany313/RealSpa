const w = window;
const d = document;
const imagenes = d.querySelectorAll('.propiedad__imagen');



w.addEventListener('scroll', () => {
    const scroll = this.scrollY / -8;

    imagenes.forEach((imagen)=>{
        imagen.style.backgroundPositionY = `${scroll}px`;
        
    })
})