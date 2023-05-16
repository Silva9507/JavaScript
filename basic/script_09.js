let llantas = parseInt(prompt("Ingresa numero de llanatas"));
let transporte = prompt("Tipo de transporte?, Terrestre, Aereo, Acuatico?").toLowerCase();

if (transporte != "Terrestre" && transporte != "Aereo" && transporte != "Acuatico") {
    alert("Transporte invalido")
} else {
    if (transporte == "terrestre") {
        if (llantas == 4){
            alert("Automovil")
        }
        if (llantas == 2){
            alert("Moto o Bicicleta")
        }
        if (llantas == 1){
            alert("Monociclo")
        }
        if (llantas >= 4){
            alert("Camion")
        }
    }
    if (transporte == "acuatico") {
        if (llantas == 0){
            alert("Barco")
        }
    }
    if (transporte == "aereo") {
        if (llantas == 20){
            alert("Avion")
        }
    }
}

