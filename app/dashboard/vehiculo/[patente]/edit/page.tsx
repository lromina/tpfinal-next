import { EditVehiculoForm } from "@/app/components/dashboard/edit-vehiculo-form"
import { createServerClient } from "@/app/utils/server"


export default async function CreateVehiculosPage({params}: any){
    const supabase = createServerClient();
    const { data: vehiculo } = await supabase.from('vehiculos')
    .select('*')
    .eq('patente', params.patente)
    .single();

    console.log ('vehiculo: ', vehiculo)

    return (
        < EditVehiculoForm vehiculo={vehiculo} />

    )

}