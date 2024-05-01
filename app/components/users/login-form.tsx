'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // es para obtener las rutas y funciones como push

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={async (event) => { // funcion que previene q no se recargue la pagina, que este ok y enviar la pagina y lo hacemos asincrono
        event.preventDefault();

        // console.log('event' , event);

        // get form data
        const formData = new FormData(event.currentTarget);
        const user = formData.get('user')?.toString();
        const clave = formData.get('clave')?.toString();

        // console.log('user', user);
        // console.log('password', clave);

        //creamos una constante donde le enviamos nuestros datos a la api
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user, clave }), //lo cambiamos a string
        });

        //creamos una constante que espera los datos del json
        const data = await response.json();

        // console.log('data recibida' , data);

        if (response.ok === false) {
          setError(data.message);
        } else {
          router.push('/dashboard');
        }
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Iniciar sesión</h1>
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <input
        type="password"
        name="clave"
        placeholder="Contraseña"
        className="w-80 h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <button
        className="w-80 h-12 bg-blue-500 text-white text-sm font-semibold leading-6"
        type="submit"
      >
        Ingresar
      </button>
      <div>
        <Link href="#" className='text-blue-700 text-sm font-bold mr-5 '>
          Olvide mi Clave!
        </Link>
        <Link href="/registro" className='text-blue-700 text-sm font-bold '>
          Registrarse
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
