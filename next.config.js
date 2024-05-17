/** @type {import('next').NextConfig} */
const nextConfig = {
    //para poder utilizar image necesito agregar los datos a la configuracion

    images: {
      domains: ['flagcdn.com', 'upload.wikimedia.org', 'selectrucks.com.ar'],
      },

};

module.exports = nextConfig;
