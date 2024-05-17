
import { createServerClient } from '@/app/utils/server';

export default async function VehiculoPorIdPage({params}: any){
    try {
        const supabase = createServerClient();
        const { data } = await supabase.from('vehiculos').select('*').eq ('patente', params.patente).single(); // Renombrar 'data' a 'vehiculos' para evitar conflictos
       
        // console.log(data)

        return (
            <div className='flex flex-col items-center gap-2 w-52'>
                <h1>{data?.patente}</h1>
    
                <img src={data.img} 
                alt="Imagen del Vehículo" 
                className="w-300 h-100 redondeado-md" />
                <h1>{data?.modelo}</h1>
                <h1>{data?.marca}</h1>
                
    
            </div>
    
    
        )
      
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return <div>Error al obtener datos</div>;
    }
   
  
}

