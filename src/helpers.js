export function calcularTotal (cantidad, plazo){

    let totalCantidad;
    if(cantidad <= 1000){
        totalCantidad = cantidad * .25;
    }else if (cantidad > 1000 && cantidad <= 5000){
        totalCantidad = cantidad * .20;
    }else if (cantidad > 5000 && cantidad <= 10000){
        totalCantidad = cantidad * .15;
    }else {
        totalCantidad = cantidad * .10;
    }
    

    //calcular plazo
    let totalPLazo = 0;
    
    switch(plazo){
        case 3:
            totalPLazo= cantidad * .05;
            break;
        case 6:
            totalPLazo= cantidad * .10;
            break;
        case 12:
            totalPLazo= cantidad * .15;
            break;
        case 24:
            totalPLazo= cantidad * .20;
            break;
       default:
           break;     
    }

    return totalPLazo + totalCantidad + cantidad;
}
