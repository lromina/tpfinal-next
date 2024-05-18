
'use client';

import { createClient } from "@/app/utils/client"
import { useRouter } from "next/navigation";
import { useState } from "react";


export const ButtonCerrarSesion = () =>{
    const supabase = createClient();

    const router = useRouter();
    const [user, setUser] = useState(null);


    const onLogout = async () => {
  
        await supabase.auth.signOut()
        router.push('/')
        setUser(null)
      
      }

        // alert('Cierre de sesione exitosa')

        // router.push('/');
    

    return(
        <button onClick={onLogout}>Cerrar Sesion</button>
    )
}