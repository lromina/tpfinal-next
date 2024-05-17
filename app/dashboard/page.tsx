

import { createServerClient} from "@/app/utils/server";
import { TarjetaVehiculo } from "../components/dashboard/vehiculo-card";




export default async function PaginaVehiculo() {

  
    const supabase = createServerClient();
    const { data: vehiculos } = await supabase.from('vehiculos').select(); // Renombrar 'data' a 'vehiculos' para evitar conflictos
    const user = await supabase.auth.getUser();

  
    return (
      <div className="flex flex-col gap-4">
        <div>
          <h1>Vehículos</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {vehiculos?.map((vehiculo: any) => ( // Usar 'datos' del estado -- como el valor no puede ser nulo se le agrega ?
          <div >
          <TarjetaVehiculo key={vehiculo.patente} vehiculo={vehiculo} />
      
        </div>
            
          ))}
        </div>
      </div>
    );
  }
  

// import { createServerClient } from '../utils/server';
// import PersonaPage from './persona/[id]/page';
// //puedo hacer una peticion a mi api dentro de mi page que es exclusivo de next

// const getDashboardData = async () => {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard`);
//         const data = await response.json();
//         return data || {};

//     } catch (error) {
//         console.error(error);
//         return {data:  []};
//     }
// };

// export default async function DashboardPage() {
//     try {
//     const supabase = createServerClient();
//          // es MUY importante que la constante este entre parentesis para transformar los objetos en array
//     const { data } = await getDashboardData(); // espero los datos de la api y las guardo en response
//     const user = await supabase.auth.getUser();


//     console.log('user:', user);
//     return (

        

//         //vamos a recorrer todos los paises 
//         <div className="flex flex-col gap-4">
//             <div>Paises</div>
//             <div className="flex items-center gap-2 gap-x-4 flex-wrap">
//                 {data.map ((pais:any) => (
//                   <PaisCard pais = {pais} key = {pais.name.common}/>
//                 ))}

//             </div>

//         </div>
//     )
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//         return <div>Error al obtener datos</div>;
//     }
   
    
// }


