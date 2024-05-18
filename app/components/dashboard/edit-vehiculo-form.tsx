'use client';


import { createClient } from "@/app/utils/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormEvent } from "react";
import React, { useRef } from 'react';

interface EditVehiculoFormProps {
    vehiculo:any;
}


export const EditVehiculoForm = ({vehiculo}: EditVehiculoFormProps) => {
    // console.log('propiedad vehicle:', vehiculo)
   
    const supabase = createClient();
    const router = useRouter();
    const formRef = useRef(null);

    const onsubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        
        const patente = formData.get('patente')?.toString();
          const modelo = formData.get('modelo')?.toString();
          const marca = formData.get('marca')?.toString();
          const img = formData.get('img')?.toString();


        
        //   console.log('Patente:', formData.get('patente'));
        //   console.log('Modelo:', formData.get('modelo'));
        //   console.log('Marca:', formData.get('marca'));
        //   console.log('URL imagen:', formData.get('img'));

          await supabase
            .from('vehiculos')
            .update({ patente, modelo, marca, img })
            .eq('patente', vehiculo.patente);


            if (formRef.current) { // Comprobar si el formulario existe antes de restablecerlo
                formRef.current.reset();
                alert('Vehículo Modificado exitosamente!')
                router.push(`/dashboard/vehiculo/${patente}`)

              }

        

        //   event.currentTarget.reset();

    }
 
    return (
      <form
      
        className="flex flex-col items-center bg-white p-12"
        ref={formRef} 
        onSubmit={onsubmit}
    
      >
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" mb-8 text-4xl font-bold">Datos del Vehiculo</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="patente"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Patente
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="patente"
                  id="patente"
                  defaultValue={vehiculo.patente}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="modelo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Modelo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="modelo"
                  id="modelo"
                  defaultValue={vehiculo.modelo}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="marca"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Marca
              </label>
              <div className="mt-2">
                <input
                  id="marca"
                  name="marca"
                  type="text"
                  defaultValue={vehiculo.marca}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="img"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL - Imagen del Vehiculo
              </label>
              <div className="mt-2">
                <input
                  id="img"
                  name="img"
                  type="text"
                  defaultValue={vehiculo.img}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>

          <Link
            className="text-sm font-semibold leading-6 text-blue-900"
            href="/dashboard" type="button"
          >
            Cancelar
          </Link>
        </div>
      </form>
    );

}