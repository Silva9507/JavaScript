let llantas = parseInt(prompt("Ingresa numero de llanatas"));
let transporte = prompt("Tipo de transporte?, Terrestre, Aereo, Acuatico?").toLowerCase();

if (llantas == 0 || transporte == "") {
    alert("No ingresaste uno de los valores")
} else {
    if (llantas >= 4 && transporte == "terrestre" ) {
        alert("Camion");
    } else {
        if (llantas == 4 && transporte == "terrestre" ) {
            alert("Automovil");
        } else {
            if (llantas == 1 && transporte == "terrestre" ) {
                alert("Monociclo");
            } else {
                if (llantas ==  2 && transporte == "terrestre" ) {
                    alert("Moto o Bicicleta");
                } else {
                    alert("no puedes continuar, refresca la pagina");
                }
            }
        }
    }
}

