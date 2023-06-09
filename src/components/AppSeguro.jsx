import React from 'react'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner';
import Resultado from './Resultado';

function AppSeguro() {

  const{resultado,cargando}=useCotizador();
  return (
    <div>
        <header className='my-10'>
            <h1 className='text-white text-center text-4xl font-black'>Cotizar de seguros de auto</h1>
        </header>

        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
           <Formulario/>

           {cargando ? <Spinner/>:<Resultado/>}
        </main>

    </div>
  )
}

export default AppSeguro