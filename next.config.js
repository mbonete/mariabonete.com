/** @type {import('next').NextConfig} */

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = function generateConfig(phase) {
  const config = {
    compiler: {
      styledComponents: true,
    }
  };

  if (phase !== PHASE_PRODUCTION_BUILD) return config;

  return {
    ...config,
    distDir: 'dist',
    output: 'export',
  };

}
