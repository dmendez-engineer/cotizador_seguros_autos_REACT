import {React,Fragment} from 'react'
import { MARCAS,YEARS,PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador';
import Error from './Error';



function Formulario() {
  
    const {datos,handleChangeDatos,setError,error,cotizarSeguro}=useCotizador();   

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(datos);
        if(Object.values(datos).includes('')){
          //  alert("Campos obligatorios");
            setError("Todos los campos son obligatorios");
           return;
        }
        else{
            setError('');
            cotizarSeguro();

        }
    }

return (
    <div>
       {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label className='block mb-3 font-bold uppercase text-gray-400'>
                Marca
                </label>
                <select name='marca' className='w-full p-3 bg-white border border-gray-200'
                onChange={(e)=>handleChangeDatos(e)}
                value={datos.marca}
                >
                <option value="0">Selecciona marca</option>
                {MARCAS.map(m=>(
                    <option 
                    key={m.id}
                    value={m.id}>{m.nombre}</option>
                ))}
                </select>
            </div>



            <div className='my-5'>
                <label className='block mb-3 font-bold uppercase text-gray-400'>
                Año
                </label>
                <select name='year' className='w-full p-3 bg-white border border-gray-200'
                value={datos.year}
                onChange={(e)=>handleChangeDatos(e)}
                >
                <option value="0">Selecciona el año</option>
                {YEARS.map(year=>(
                    <option 
                    key={year}
                    value={year}>{year}</option>
                ))}
                </select>
            </div>




            <div className='my-5'>
                <label className='block mb-3 font-bold uppercase text-gray-400'>
                Elige un plan
                </label>
                <div className='flex gap-3 items-center'>
                    {PLANES.map(plan=>(
                        <Fragment
                        key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input type='radio' name='plan' value={plan.id}
                            onChange={(e)=>handleChangeDatos(e)}
                            
                            />
                        </Fragment>
                        
                    ))}
                </div>
                
            </div>
            <input type='submit' value="Cotizar" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white 
            cursor-pointer p-3 uppercase font-bold'/>
        </form>
    </div>
  )
}

export default Formulario