import { montserrat } from './ui/fonts';
import './ui/global.css';
import SideNav from './components/dashboard/sidenav';

export const metadata = {
  title: 'Empresa',
  description: 'Empresa dedicada al servicio logistico'
}


export default function RootLayout({children}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      <div>
        <SideNav/>
        
      </div>
      <div className='mt-9 mx-auto p4'>
        {children}
        </div>
        </body>
    </html>
  );
}
