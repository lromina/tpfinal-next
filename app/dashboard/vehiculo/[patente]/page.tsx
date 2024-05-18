import { createServerClient } from '@/app/utils/server';

export default async function VehiculoPorIdPage({ params }: any) {
  try {
    const supabase = createServerClient();
    const { data } = await supabase
      .from('vehiculos')
      .select('*')
      .eq('patente', params.patente)
      .single(); // Renombrar 'data' a 'vehiculos' para evitar conflictos

    // console.log(data)

    return (
      <div className="max-w-72 flex flex-grow flex-col items-center gap-2">
        <h1
          className="text-2xl font-medium md:text-4xl"
          style={{ fontFamily: 'Roboto condensed, sans-serif' }}
        >
          Datos del Vehiculo
        </h1>
        <h2 className="text-2xl md:text-4xl">Patente:{data?.patente}</h2>

        <img
          src={data.img}
          alt="Imagen del Vehículo"
          className="w-100 redondeado-md h-80"
        />
        <h2 className="text-1.5rem md:text-2rem">Modelo:{data?.modelo}</h2>
        <h2>Marca:{data?.marca}</h2>

        <div className="flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-gray-300 text-white hover:bg-gray-700 hover:text-white">
          <a href={`/dashboard/vehiculo/${data?.patente}/edit`}>
            <button>Modificar</button>
          </a>
        </div>
        <div className="flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-gray-300 text-white hover:bg-gray-700 hover:text-white">
          <button>Eliminar</button>
        </div>
        <div className="flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-gray-300 text-white hover:bg-gray-700 hover:text-white">
          <a href="/dashboard">
            <button>Cancelar</button>
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return <div>Error al obtener datos</div>;
  }
}
