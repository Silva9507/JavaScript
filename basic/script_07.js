let day = prompt("Ingresa un dia").toLowerCase(); // martes Martes mArtes (martes)

if (day == "sabado" || day == "domingo") {
  alert("Es fin de semana");
} else {
  if (
    day == "Lunes" ||
    day == "Martes" ||
    day == "Miercoles" ||
    day == "Jueves" ||
    day == "Viernes"
  ) {
    alert("Es un dia entre semana");
  } else {
    alert("Favor ingrese es un dia de la semana");
  }
}

