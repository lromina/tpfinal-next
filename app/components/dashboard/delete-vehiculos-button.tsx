'use client';

import { createClient } from "@/app/utils/client"
import { useRouter } from "next/navigation";


export const DeleteVehiculosButton = ({vehiculo}: any) =>{
    const supabase = createClient();

    const router = useRouter();


    const onDelete = async () => {
        const {data, error} = await supabase.from('vehiculos').delete().eq('patente', vehiculo.patente);
        console.log(data,error)
        alert('Vehiculo Eliminado Exitosamente!')

        router.push('/dashboard');
    };

    return(
        <button onClick={onDelete}>Eliminar</button>
    )
}