/** @type {import('next').NextConfig} */
const nextConfig = {
    //para poder utilizar image necesito agregar los datos a la configuracion

    images: {
      domains: ['flagcdn.com', 'upload.wikimedia.org', 'selectrucks.com.ar'],
      },

};


module.exports = nextConfig;

module.exports = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};

