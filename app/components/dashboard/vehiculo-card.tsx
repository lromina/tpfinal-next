
'use client';

import {  useRouter } from "next/navigation"

export const TarjetaVehiculo = ({ vehiculo }: any) => {
    const router = useRouter();
    return (
      <div 
      
        className="flex flex-col items-center gap-2 w-52"
        onClick={() => {
            router.push(`/api/dashboard/vehiculo/${vehiculo.patente}`)
        }}>
          
          <div className="ml-2">
            <p className="texto-gris-500">{vehiculo.patente}</p>
            
            <img src={vehiculo.img} 
            alt="Imagen del Vehículo" 
            className="w-300 h-100 redondeado-md" />
          
            
          </div>
        </div>

     
      
    );
  };
  
