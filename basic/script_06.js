// Condicionales - if/else

// Algoritmo que dependiendo si el o la usuaria son mayor de 18 años habilita un catalogo de peliculas violentas
// Si el pais es china asi sea mayor de 18 no habilite el catalogo

let age = parseInt(prompt("Ingrese su edad"));
let country = prompt("Ingresa tu pais").toLowerCase();

console.log (age, country);

if (age == 0 || country == "") {
    alert("No ingesaste uno de los valores")
} else {
    if (age >= 27 && country != "china" ) {
        alert("Se ha desbloqueado el catalogo de pelis violentas");
    } else {
        alert("no tienes permisos para ver este catalogo");
    }
}



/**
 * Operadores de comparacion (operadores logicos se suelen nombrar)
 *
 * > : Indicador que es mayor a algo
 * < : Indicador que es menor a algo
 * == : Comparar si un valor es igual al otro
 * >= : Si es mayor o igual
 * >= : Si es menor o igual
 * != : Diferente
 * Operadores logicos
 * &&: Y
 * // : O
 */