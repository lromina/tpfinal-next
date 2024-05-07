import { NextRequest, NextResponse } from "next/server";


//las rutas deben contener una constante con el nombre de lo que queremos obtener GET o POST
export const GET = async (req: NextRequest, res: NextResponse) => {
    const response = await fetch ('https://restcountries.com/v3.1/all?fields=name,flags');

    const data = await response.json();

    // console.log('data' ,data)

    return Response.json ({ data });
}