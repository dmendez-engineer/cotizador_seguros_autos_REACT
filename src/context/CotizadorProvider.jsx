
import {React,createContext, useState} from 'react'
import { formatearDinero, obtenerDiferenciaYear, obtenerPorMarca,obtenerPorPlan } from '../helpers';

const CotizadorContext= createContext();

const CotizadorProvider = ({children})=>{
    
    const [datos,setDatos]=useState({
        marca:'',
        year:'',
        plan:''
    });
    const[error,setError]=useState('');
    const[resultado,setResultado]=useState(0);
    const[cargando,setCargando]=useState(false);

    const handleChangeDatos=(e)=>{
        e.preventDefault();
        
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        });

    }
    const cotizarSeguro=()=>{
        //Partimos de una base que la da el cliente
        let resultado=2000;

        // Obtener diferencia de años
        let diferencia=obtenerDiferenciaYear(+datos.year)*3;
        resultado=resultado-(resultado*diferencia/100);
        
    
        resultado*=obtenerPorMarca(datos.marca);

        //Hay que restar el 3% por cada año
        resultado*=obtenerPorPlan(datos.plan);

        resultado=formatearDinero(resultado);
        
        setCargando(true);
        
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 2500);
        //Americano una base de 15%
        //Europeo una base de 35%
        //Asiatico una base de 5%

        //Basico 20%
        //Completo 50%
        
    }

    
    return (
        <CotizadorContext.Provider
        value={{
            datos:datos,
            handleChangeDatos:handleChangeDatos,
            setError:setError,
            error:error,
            cotizarSeguro:cotizarSeguro,
            resultado:resultado,
            cargando:cargando
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}
export {
    CotizadorProvider
}
export default CotizadorContext