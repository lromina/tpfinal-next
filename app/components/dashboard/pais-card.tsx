
'use client';

import Image from "next/image"
import {  useRouter } from "next/navigation"

//Cuando queremos usar redirect del lado del cliente debemos usar UseRouter

export const PaisCard = ({pais} : any) => {
    const router = useRouter();
    return (
        <div 
        key={pais.name.common}
        className="flex flex-col items-center gap-2 w-52"
        onClick={() => {
            router.push(`/api/dashboard/country/${pais.name.common}`)
            
        }}>
        <Image
            width={40}
            height={40}
            src={pais.flags.png}
            alt={pais.name.common}
            className="w-10 h-10"
        />
        <span>{pais.name.common} </span>
    </div> 
    )
}