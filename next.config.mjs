/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    checkoutPagePreview: `checkoutPagePreview@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'checkoutPage',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {
          './testComponent': './src/components/Test.tsx'
        }
      })
    );
    return config;
  }
};

export default nextConfig;

