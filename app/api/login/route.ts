import { NextRequest, NextResponse } from "next/server";
import { createServerClient} from "@/app/utils/server";



export const POST = async (req: NextRequest , res: NextResponse) => {
    //para obtener el valor del body debemos obtenerlo a traves de un await
    const body = await req.json();
    const {user, clave} = body;

    //Supabase conexion
    const supabase = createServerClient();
    //comparamos los datos
   const usuarioEncontrado = await supabase.from("users")
   .select("*")
   .filter('username', 'eq',user)
   .filter('password', 'eq',clave)
   .limit(1)
   .single();

    console.log("supabase" , usuarioEncontrado);

    //comparamos los datos
    // const usuarioEncontrado = users.data?.find(u => u.username === user && u.password === clave);

    // console.log('objJSON', users);
    // console.log('usuario encontrado', usuarioEncontrado)
    //creamos una constante para guardar los datos del archivo json
    if (usuarioEncontrado.data !== null){
        return Response.json({menssage: 'Bienvenido'})
    }else{
        return Response.json({menssage: 'Usuario No encontrado'},{
        status: 401,
    })
    }       


   
}