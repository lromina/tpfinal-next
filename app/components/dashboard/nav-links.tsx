import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Quienes Somos', href: '/', icon: HomeIcon },
  {
    name: 'Servicios', href: '/servicios', icon: DocumentDuplicateIcon,
  },
  {
    name: 'Novedades', href: '/servicios', icon: DocumentDuplicateIcon,
  },
  {
    name: 'Contacto', href: '/contacto', icon: DocumentDuplicateIcon,
  },
 
  { name: 'Trabaja con Nosotros', href: '/login', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
    <div className="hidden sm:ml-10 sm:block">
      <div className="flex space-x-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className=' flex items-center justify-center bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'        
            style={{ flex: '1' }} >
            <LinkIcon className="w-6 h-6 mr-2" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
       </div>
       </div>
    </>
  );
}
