
import { createServerClient } from '@/app/utils/server';

export default async function VehiculoPorIdPage({params}: any){
    try {
        const supabase = createServerClient();
        const { data } = await supabase.from('vehiculos').select('*').eq ('patente', params.patente).single(); // Renombrar 'data' a 'vehiculos' para evitar conflictos
       
        // console.log(data)

        return (
            <div className='flex flex-col items-center gap-2 flex-grow max-w-72'>
                <h1 className="text-2xl md:text-4xl font-medium" style={{ fontFamily: 'Roboto condensed, sans-serif' }}>Datos del Vehiculo</h1>
                <h2 className='text-2xl md:text-4xl'>Patente:{data?.patente}</h2>
    
                <img src={data.img} 
                alt="Imagen del Vehículo" 
                className="w-100 h-80 redondeado-md" />
                <h2 className='text-1.5rem md:text-2rem'>Modelo:{data?.modelo}</h2>
                <h2>Marca:{data?.marca}</h2>

                <div className="flex items-center justify-center bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        <button>Modificar</button>
        </div>
        <div className="flex items-center justify-center bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        <button>Eliminar</button>
        </div>
        <div className="flex items-center justify-center bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        <a href="/dashboard"><button>Cancelar</button></a>
        </div>
                
    
            </div>


            
    
    
        )
      
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return <div>Error al obtener datos</div>;
    }
   
  
}

