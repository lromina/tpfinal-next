 //puedo hacer una peticion a mi api dentro de mi page que es exclusivo de next
const getDashboardData = async ()=> {
    const response = await fetch('http://localhost:3000/api/dashboard'); //cuando nosotros vamos a llamar desde el servidor debemos pasarle toda la URL
    const data = await response.json();

    return data;
}

export default async function Page(){
   const data = await getDashboardData();
    return ( 
    <div> Dashboard {JSON.stringify(data,null, 2)}</div>

)
}