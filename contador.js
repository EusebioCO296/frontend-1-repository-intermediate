let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;
    if (cuenta >= 15) {
        //cambiar el color del numero a rojo;
        document.getElementById("numero").style.color = "red";
    }
}

function disminuir() {
    cuenta--;
    document.getElementById("numero").innerHTML = cuenta;
    if (cuenta < 15) {
        document.getElementById("numero").style.color = "black";
    } 
} 

function reiniciar() {
    cuenta = 0;
    document.getElementById("numero").innerHTML = cuenta;
}