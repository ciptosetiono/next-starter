/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
        /*
      {
        source: '/s',
        destination: '/auth/login',
        permanent: false,
      },
      */
    ]
          
},
    
};

module.exports = nextConfig;
