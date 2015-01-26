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
