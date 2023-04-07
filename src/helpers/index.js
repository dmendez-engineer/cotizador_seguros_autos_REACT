export function obtenerDiferenciaYear(year){

    return new Date().getFullYear()-year;
  
}

export function obtenerPorMarca(marca){
    let porcentaje=0;
    
    switch(marca){
        case "1":
            porcentaje=1.3;
        break;
        case "2":
            porcentaje=1.15;
        break;
        case "3":
            porcentaje=1.05;
        break;
    }
    return porcentaje;
}

export function obtenerPorPlan(plan){
    
    return (plan==="1")?1.28:1.50;
}
export function formatearDinero(cantidad){
    return cantidad.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
    });
}