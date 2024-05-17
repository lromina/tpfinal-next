
import { createServerClient } from '@/app/utils/server';
import Image from 'next/image'




export default async function VehiculoPorIdPage({params}: any){
    try {
        const supabase = createServerClient();
        const { data } = await supabase.from('vehiculos').select('*').eq ('patente', params.patente).single(); // Renombrar 'data' a 'vehiculos' para evitar conflictos
       
        console.log(data)

        // return (
        //     <div className='flex flex-col items-center gap-2 w-52'>
        //         <h3>{data?.patente}</h3>
    
        //         <Image
        //             src={data?.img}
        //             alt='imagen de camion'
        //             width={100}
        //             height={100}
        //         />
    
        //     </div>
    
    
        // )
      
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return <div>Error al obtener datos</div>;
    }
   
  
}



// export default async function handler(req: any, res: any) {
//     const { patente } = req.query; // Obtiene la patente del parámetro de la URL
  
//     try {
//       const supabase = createServerClient();
//       const { data } = await supabase.from('vehiculos').select('*').eq('patente', patente).single();
  
//       console.log('data ', data)
  
//       if (!data) {
//         return res.status(404).json({ message: 'Vehículo no encontrado' });
//       }
  
//       res.status(200).json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error interno del servidor' });
//     }
//   }
  