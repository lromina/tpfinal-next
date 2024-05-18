import { createServerClient } from "@/app/utils/server";
import { TarjetaVehiculo } from "../components/dashboard/vehiculo-card";

export default async function PaginaVehiculo() {
  const supabase = createServerClient();
  const { data: vehiculos } = await supabase.from('vehiculos').select(); // Renombrando 'data' a 'vehiculos' para mayor claridad

  const user = await supabase.auth.getUser();
  console.log('user: ', user)

  return (
    <div className="flex flex-col gap-4">
    <div className="flex items-center justify-center gap-4"> {/* Modified class for side-by-side buttons */}
      <div className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <a href="/dashboard/create"><button>Agregar</button></a>
      </div>
      <div className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <button>Cerrar sesión</button>
      </div>
    </div>

    <div>
      <h1 className="text-2xl md:text-4xl font-medium" style={{ fontFamily: 'Roboto condensed, sans-serif' }}>Vehículos</h1>
    </div>
    <div className="flex flex-wrap gap-4">
      {vehiculos?.map((vehiculo: any) => (
        <div key={vehiculo.patente}>
          <TarjetaVehiculo vehiculo={vehiculo} />
        </div>
      ))}
    </div>
  </div>
);
}
