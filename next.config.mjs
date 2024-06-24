/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images:{
    remotePatterns:[
      {
        hostname:'i.pinimg.com',
        protocol:'https'
      },
      {
        hostname:'etherealechoesart.com',
        protocol:'https'
      },
      {
        hostname:'www.pinterest.com',
        protocol:'https'
      }
    ]
  }
};

export default nextConfig;
