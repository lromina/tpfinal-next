import { NextRequest, NextResponse } from "next/server";
import users from "@/app/api/users.json";
import { createClient } from "@/app/utils/server";


export const POST = async (req: NextRequest , res: NextResponse) => {
    //para obtener el valor del body debemos obtenerlo a traves de un await
    const body = await req.json();

    //Supabase conexion

    // const supabase = createClient()

    // console.log('data recibida', body);
    //una vez obtenido los datos lo guardamos en un const user-clave que es lo que recibimos 
    //lo mismo que haciamos en express
    const{user, clave} = body;
    //comparamos los datos
    const usuarioEncontrado = users.usuarios.find(u => u.user === user && u.clave === clave);

    console.log('objJSON', users);
    console.log('usuario encontrado', usuarioEncontrado)
    //creamos una constante para guardar los datos del archivo json
    if (usuarioEncontrado !== undefined){
        return Response.json({menssage: 'Bienvenido'})
    }else{
        return Response.json({menssage: 'Usuario no encontrado'})
    }        //mostramos en postman esos datos. 


   
}