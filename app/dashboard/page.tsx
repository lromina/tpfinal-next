
import Image from 'next/image';
//puedo hacer una peticion a mi api dentro de mi page que es exclusivo de next
const getDashboardData = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard`);
        const data = await response.json();
        return {data:  []};

    } catch (error) {
        console.error(error);
        return {data:  []};
    }
};

export default async function DashboardPage() {
    try {
         // es MUY importante que la constante este entre parentesis para transformar los objetos en array
    const { data } = await getDashboardData(); // espero los datos de la api y las guardo en response

    // interface Country {
    //     name: {
    //       common: string;
    //     };
    //     flags: {
    //       png: string;
    //     };
    //   }

    console.log('Tipo de datos de data:', typeof data);
    return (

        //vamos a recorrer todos los paises 
        <div className="flex flex-col gap-4">
            <div>Paises</div>
            <div className="flex items-center gap-2 flex-wrap">
                {data.map ((pais:any) => (
                    <div key={pais.name.common} className="flex items-center gap-2">
                        <Image
                            src={pais.flags.png}
                            alt={pais.name.common}
                            className="w-10 h-10"
                        />
                        <span>{pais.name.common} </span>
                    </div>
                ))}

            </div>

        </div>
    )
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return <div>Error al obtener datos</div>;
    }
   
    
}


// const getDashboardData = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/api/dashboard');
//         const data = await response.json();
//         console.log('Respuesta de la API:', data);
//         return data;
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//         throw error; // Propagar el error para manejarlo en el componente
//     }
// };


// export default async function Page() {
//     try {
//         const response = await getDashboardData();
//         const { data } = response;

//         console.log('Tipo de data:', typeof data);

//         // Continuar con el código solo si data es un array
//         if (Array.isArray(data)) {
//             return (
//                 <div className="flex flex-col gap-4">
//                     <div>Paises</div>
//                     <div className="flex items-center gap-2 flex-wrap">
//                         {data.map((pais) => (
//                             <div key={pais.name.common} className="flex items-center gap-2">
//                                 <img
//                                     src={pais.flags.png}
//                                     alt={pais.name.common}
//                                     className="w-10 h-10"
//                                 />
//                                 <span>{pais.name.common}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             );
//         } else {
//             console.error('Los datos obtenidos no son un array:', data);
//             return <div>Error: Los datos obtenidos no son válidos</div>;
//         }
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//         return <div>Error al obtener datos</div>;
//     }
// }



