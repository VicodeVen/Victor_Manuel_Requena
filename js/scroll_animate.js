export default function scroll() {
    const w = window;
    const contentDos = document.querySelector(".content2");
    const barrasDeProgreso = document.querySelector(".barras-de-progresos");
    
    w.addEventListener('scroll', () => {
        if(w.pageYOffset > 500){
            barrasDeProgreso.classList.add("fadeInLeft");
        }else {
            barrasDeProgreso.classList.remove("fadeInLeft")
        }
        if(w.pageYOffset > 200) {
            contentDos.classList.add("fadeIn");
            contentDos.classList.add("dsplact");
        }else {
            contentDos.classList.remove("fadeIn");
            contentDos.classList.remove("dsplact");
        }
        
    });
};