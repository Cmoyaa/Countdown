function newYear() {
    var fechaIngresada = new Date(document.getElementById("fechaIngresada").value).setHours(24);
    var hoy = new Date().getTime();
    falta = fechaIngresada - hoy;
    console.log(falta)

    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;
    
    var d = Math.floor(falta / (dias));
    var h = Math.floor((falta % (dias)) / (horas));
    var m = Math.floor((falta % (horas)) / (minutos));
    var s = Math.floor((falta % (minutos)) / segundos);

    if (fechaIngresada > hoy) {
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2022
    } 
    else if (fechaIngresada <= hoy) {
        document.getElementById('dias').innerHTML = 0
        document.getElementById('horas').innerHTML = 0
        document.getElementById('minutos').innerHTML = 0
        document.getElementById('segundos').innerHTML = 0
        document.getElementById('año').innerHTML = 2021

    }
    
}

setInterval(function(){
    newYear();
}, 1000)