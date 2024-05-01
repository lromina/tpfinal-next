import { NextRequest, NextResponse } from "next/server";


//las rutas deben contener una constante con el nombre de lo que queremos obtener GET o POST
export const GET = async (req: NextRequest, res: NextResponse) => {
    return Response.json ({mensagge: 'Dashboard'});
}