/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    checkoutPagePreview: `checkoutPagePreview@http://localhost:3000/_next/static/${location}/remoteEntry.js`
  };
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.cicloplast.com', 'static-00.iconduck.com']
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkoutPage',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {
          // './testComponent': './src/components/Test.tsx'
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
};

export default nextConfig;
