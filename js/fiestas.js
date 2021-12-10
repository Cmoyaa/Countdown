function newYear() {
    var navidad2021 = new Date('Sep 18, 2022 00:00:00').getTime();
    var navidad2022 = new Date('Sep 18, 2023 00:00:00').getTime();
    var navidad2023 = new Date('Sep 18, 2024 00:00:00').getTime();
    var hoy = new Date().getTime();

    /* Diferencia entre la fecha que se busca y la actual de sistema */
    falta2021 = navidad2021 - hoy;
    falta2022 = navidad2022 - hoy;
    falta2023 = navidad2023 - hoy;

    /* Declaro las variables para hacer el cálculo */
    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;

    /* Si falta aún para el día solicitado, que se muestre el tiempo que falta */
    if (falta2021 > 0) {
        var d = Math.floor(falta2021 / (dias));
        var h = Math.floor((falta2021 % (dias)) / (horas));
        var m = Math.floor((falta2021 % (horas)) / (minutos));
        var s = Math.floor((falta2021 % (minutos)) / segundos);
        
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2022
    }

    else if (falta2022 > 0) {
        var d = Math.floor(falta2022 / (dias));
        var h = Math.floor((falta2022 % (dias)) / (horas));
        var m = Math.floor((falta2022 % (horas)) / (minutos));
        var s = Math.floor((falta2022 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2023
    }

    else if (falta2023 > 0) {
        var d = Math.floor(falta2023 / (dias));
        var h = Math.floor((falta2023 % (dias)) / (horas));
        var m = Math.floor((falta2023 % (horas)) / (minutos));
        var s = Math.floor((falta2023 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2024
    }
}

setInterval(function(){
    newYear();
}, 1000)