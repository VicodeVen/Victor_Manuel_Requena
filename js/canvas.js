export default function canvasAnimate () {
    const d= document;
    const w = window;
    const gravedad = 0.35;
    let canvas = d.querySelector("#board"),
    ctx = canvas.getContext("2d"),
    playing = true, //Cambiar a True para ver los resultados
    size = 40,
    tiempo = 0,
    y = 50,
    velocidad = 0,
    service1 = d.querySelector(".service1"),
    service2 = d.querySelector(".service2"),
    service3 = d.querySelector(".service3"),
    service4 = d.querySelector(".service4"),
    ser1 = document.querySelector(".ser1"),
    ser2 = document.querySelector(".ser2"),
    ser3 = document.querySelector(".ser3"),
    ser4 = document.querySelector(".ser4");
    
    function draw () {
        ctx.fillStyle = "#257ec3af";
        if(window.pageYOffset > 1650) {
            ctx.fillRect(0,y,1,size);
            tiempo = tiempo + 0.0100;
            velocidad = velocidad + gravedad * tiempo;
            y = y + velocidad;
        }else {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            velocidad = 0;
            tiempo = 0;
            y = 50;
        }
        //tags
        if(w.pageYOffset > 1700){service1.classList.add("ser_opacity")}else {service1.classList.remove("ser_opacity")};
        if(y > 104) {service3.classList.add("ser_opacity")}else {service3.classList.remove("ser_opacity")};
        if(y > 230) {service2.classList.add("ser_opacity")}else {service2.classList.remove("ser_opacity")};
        if(y > 424) {service4.classList.add("ser_opacity")}else {service4.classList.remove("ser_opacity")};
        //squares
        if(w.pageYOffset > 1700){ser1.classList.add("ser_opacity")}else {ser1.classList.remove("ser_opacity")};
        if(y > 104) {ser3.classList.add("ser_opacity")}else {ser3.classList.remove("ser_opacity")};
        if(y > 230) {ser2.classList.add("ser_opacity")}else {ser2.classList.remove("ser_opacity")};
        if(y > 424) {ser4.classList.add("ser_opacity")}else {ser4.classList.remove("ser_opacity")};
        if(playing) requestAnimationFrame(draw)
}
requestAnimationFrame(draw);
}