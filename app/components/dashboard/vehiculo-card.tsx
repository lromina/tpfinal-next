
'use client';

import {  useRouter } from "next/navigation";



export const TarjetaVehiculo = ({ vehiculo }: any) => {
    const router = useRouter();
    return (
      <div 
      
        className="flex flex-col items-center gap-2 w-52"
        onClick={() => {
            router.push(`/dashboard/vehiculo/${vehiculo.patente}`)
        }}>
          
          <div className="ml-2">
            <h2 className="text-1.5rem md:text-2rem font-medium" >{vehiculo.patente}</h2>
            
            <img src={vehiculo.img} 
            alt="Imagen del Vehículo" 
            className="w-300 h-100 redondeado-md" />
          
            
          </div>

          <a className="text-sm font-semibold leading-6 text-blue-900" href={`/dashboard/vehiculo/${vehiculo.patente}`}><button>+INFO</button></a>
        
        </div>

     
      
    );
  };
  
