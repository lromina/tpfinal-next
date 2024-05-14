

import { PaisCard } from '../components/dashboard/pais-card';
//puedo hacer una peticion a mi api dentro de mi page que es exclusivo de next
const getDashboardData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard`);
        const data = await response.json();
        return data || {};

    } catch (error) {
        console.error(error);
        return {data:  []};
    }
};

export default async function DashboardPage() {
    try {
         // es MUY importante que la constante este entre parentesis para transformar los objetos en array
    const { data } = await getDashboardData(); // espero los datos de la api y las guardo en response


    // console.log('Tipo de datos de data:', typeof data);
    return (

        //vamos a recorrer todos los paises 
        <div className="flex flex-col gap-4">
            <div>Paises</div>
            <div className="flex items-center gap-2 gap-x-4 flex-wrap">
                {data.map ((pais:any) => (
                  <PaisCard pais = {pais} key = {pais.name.common}/>
                ))}

            </div>

        </div>
    )
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return <div>Error al obtener datos</div>;
    }
   
    
}


