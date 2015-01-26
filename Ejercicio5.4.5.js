function cambio (id, newValue) {
    var element = document.getElementById(id);
    element.innerHTML = newValue;
}


function suma(op, rest){

    var operandos = document.getElementById(op);
    var operandos = operandos.innerHTML.split ("+");
    var resultado = parseInt(operandos[0]) + parseInt(operandos[1]);
    
    cambio (rest, '= ' + resultado);
    
}

function sumaAleatoria (optag) {
   var operation = document.getElementById(optag);
   operation.innerHTML = Math.round(Math.random()*100) + "+" + Math.round(Math.random()*100)
}
