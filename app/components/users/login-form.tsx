// 'use client';


// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';




// export const LoginForm = () => {
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter(); // es para obtener las rutas y funciones como push

//   return (
//     <form
//       className="flex flex-col items-center"
//       onSubmit={async (event) => { // funcion que previene q no se recargue la pagina, que este ok y enviar la pagina y lo hacemos asincrono
//         event.preventDefault();

//         // console.log('event' , event);

//         // get form data
//         const formData = new FormData(event.currentTarget);
//         const user = formData.get('user')?.toString();
//         const clave = formData.get('clave')?.toString();

//         console.log('user', user);
//         console.log('password', clave);

   
       
//         //creamos una constante donde le enviamos nuestros datos a la api
//         const response = await fetch('/api/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ user, clave }), //lo cambiamos a string
//         });

//         //creamos una constante que espera los datos del json
//         const data = await response.json();

//         console.log('data recibida' , data);

       
//         if (response.ok === false && response.status === 401) {
//           setError(data.menssage);
//         } else {
//           router.push('/dashboard');
//         }
//       }}
//     >




//       <h1 className="text-4xl font-bold mb-8">Iniciar sesión</h1>

      

//       <input
//         type="text"
//         name="user"
//         placeholder="Email"
//         className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
//       />
//       <input
//         type="password"
//         name="clave"
//         placeholder="Contraseña"
//         className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
//       />
//       <button
//         className="w-80 h-12 bg-blue-500 text-white text-sm font-semibold leading-6"
//         type="submit"
//       >
//         Ingresar
//       </button>
      
//       <div>
//         <Link href="#" className='text-blue-700 text-sm font-bold mr-5 '>
//           Olvide mi Clave!
//         </Link>
//         <Link href="/registro" className='text-blue-700 text-sm font-bold '>
//           Registrarse
//         </Link>
//       </div>
//       {error && <p className="text-red-500 font-bold">{error}</p>}
//     </form>
//   );
// };

'use client';

import { createClient } from "@/app/utils/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const onSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/');
    }
  };

  const onSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={async (event) => {
        event.preventDefault();
        onSignIn();
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Iniciar sesión</h1>
      <input
        type="email"
        name="user"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <input
        type="password"
        name="clave"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <button
        className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        type="submit"
      >
        Iniciar Sesión
      </button>
      <button
        onClick={onSignUp}
        className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        type="button"
      >
        Registrarse
      </button>
      {error && <p className="text-red-500 font-bold">{error}</p>}
    </form>
  );
};


