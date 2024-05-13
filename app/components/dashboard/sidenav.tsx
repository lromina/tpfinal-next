// import Link from 'next/link';
// import NavLinks from '@/app/components/dashboard/nav-links';

// export default function SideNav() {
//   return (
//     <div className="flex flex-col h-full px-3 py-4 md:px-2 bg-blue-600 mb-2 py-2 text-md font-medium">
//       <div className="text-white md:w-250">
//         <h1 className="text-4xl font-medium">Empresa de Logística</h1>
//       </div>
//       <NavLinks />
//     </div>
//   );
// }
import Link from 'next/link';
import NavLinks from '@/app/components/dashboard/nav-links';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <Link href="/">
        <div className="flex items-center mb-2 h-20 md:h-40 rounded-md bg-blue-600 p-4 text-white w-40 md:w-full">
          <Image src="/camion.png" alt="Logo de la empresa" className="w-20 h-auto mr-2" width={50} height={50} />
          <h1 className="text-2xl md:text-4xl font-medium" style={{ fontFamily: 'Roboto condensed, sans-serif' }}>Empresa de Logística</h1>
        </div>
      </Link>
      <NavLinks />
    </div>
  );
}

