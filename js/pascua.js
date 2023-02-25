function newYear() {
    var pascua2023 = new Date('Apr 17, 2023 00:00:00').getTime();
    var pascua2024 = new Date('Apr 9, 2024 00:00:00').getTime();
    var pascua2025 = new Date('Mar 31, 2025 00:00:00').getTime();
    var pascua2026 = new Date('Mar 31, 2026 00:00:00').getTime();
    var pascua2027 = new Date('Mar 31, 2027 00:00:00').getTime();
    var pascua2028 = new Date('Mar 31, 2028 00:00:00').getTime();
    var pascua2029 = new Date('Mar 31, 2029 00:00:00').getTime();
    var pascua2030 = new Date('Mar 31, 2030 00:00:00').getTime();
    var hoy = new Date().getTime();

    /* Diferencia entre la fecha que se busca y la actual de sistema */
    falta2023 = pascua2023 - hoy;
    falta2024 = pascua2024 - hoy;
    falta2025 = pascua2025 - hoy;
    falta2026 = pascua2026 - hoy;
    falta2027 = pascua2027 - hoy;
    falta2028 = pascua2028 - hoy;
    falta2029 = pascua2029 - hoy;
    falta2030 = pascua2030 - hoy;

    /* Declaro las variables para hacer el cálculo */
    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;

    /* Si falta aún para el día solicitado, que se muestre el tiempo que falta */
    if (falta2023 > 0) {
        var d = Math.floor(falta2023 / (dias));
        var h = Math.floor((falta2023 % (dias)) / (horas));
        var m = Math.floor((falta2023 % (horas)) / (minutos));
        var s = Math.floor((falta2023 % (minutos)) / segundos);
        
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2023
    }

    else if (falta2024 > 0) {
        var d = Math.floor(falta2024 / (dias));
        var h = Math.floor((falta2024 % (dias)) / (horas));
        var m = Math.floor((falta2024 % (horas)) / (minutos));
        var s = Math.floor((falta2024 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2024
    }

    else if (falta2025 > 0) {
        var d = Math.floor(falta2025 / (dias));
        var h = Math.floor((falta2025 % (dias)) / (horas));
        var m = Math.floor((falta2025 % (horas)) / (minutos));
        var s = Math.floor((falta2025 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2025
    }
    
    else if (falta2026 > 0) {
        var d = Math.floor(falta2026 / (dias));
        var h = Math.floor((falta2026 % (dias)) / (horas));
        var m = Math.floor((falta2026 % (horas)) / (minutos));
        var s = Math.floor((falta2026 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2026
    }

    else if (falta2027 > 0) {
        var d = Math.floor(falta2027 / (dias));
        var h = Math.floor((falta2027 % (dias)) / (horas));
        var m = Math.floor((falta2027 % (horas)) / (minutos));
        var s = Math.floor((falta2027 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2027
    }

    else if (falta2028 > 0) {
        var d = Math.floor(falta2028 / (dias));
        var h = Math.floor((falta2028 % (dias)) / (horas));
        var m = Math.floor((falta2028 % (horas)) / (minutos));
        var s = Math.floor((falta2028 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2028
    }

    else if (falta2029 > 0) {
        var d = Math.floor(falta2029 / (dias));
        var h = Math.floor((falta2029 % (dias)) / (horas));
        var m = Math.floor((falta2029 % (horas)) / (minutos));
        var s = Math.floor((falta2029 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2029
    }

    else if (falta2030 > 0) {
        var d = Math.floor(falta2030 / (dias));
        var h = Math.floor((falta2030 % (dias)) / (horas));
        var m = Math.floor((falta2030 % (horas)) / (minutos));
        var s = Math.floor((falta2030 % (minutos)) / segundos);
    
        document.getElementById('dias').innerHTML = d
        document.getElementById('horas').innerHTML = h
        document.getElementById('minutos').innerHTML = m
        document.getElementById('segundos').innerHTML = s
        document.getElementById('año').innerHTML = 2030
    }
    
}

setInterval(function(){
newYear();
}, 1000)
