export default function canvasAnimate () {
    const d= document;
    const w = window;
    let canvas = d.querySelector("#board");
    let ctx = canvas.getContext("2d");
    let playing = true; //Cambiar a True para ver los resultados
    let size = 40;
    const gravedad = 0.35;
    let tiempo = 0;
    let y = 50;
    let velocidad = 0;
    let service1 = d.querySelector(".service1");
    let service2 = d.querySelector(".service2");
    let service3 = d.querySelector(".service3");
    let service4 = d.querySelector(".service4");
    function draw () {

        ctx.fillStyle = "#257ec3af";
        if(window.pageYOffset > 1650) {
            
            ctx.fillRect(0,y,1,size);
            tiempo = tiempo + 0.0100;
            velocidad = velocidad + gravedad * tiempo;
            y = y + velocidad;
            // console.log(window.pageYOffset)
            console.log(y)
        }else {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            velocidad = 0;
            tiempo = 0;
            y = 50;
        }

        if(w.pageYOffset > 1700){service1.classList.add("ser_opacity")}else {service1.classList.remove("ser_opacity")};
        if(y > 104) {service3.classList.add("ser_opacity")}else {service3.classList.remove("ser_opacity")};
        if(y > 230) {service2.classList.add("ser_opacity")}else {service2.classList.remove("ser_opacity")};
        if(y > 424) {service4.classList.add("ser_opacity")}else {service4.classList.remove("ser_opacity")};




        if(playing) requestAnimationFrame(draw)
}

requestAnimationFrame(draw);

}