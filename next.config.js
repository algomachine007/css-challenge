/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig

const path = require('path');
//main.scss contains all variable and mixin imports, this line will prepend that main.scss
//to all module styles.. advisable to use scss partials for vars and mixins etc

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // prependData: `@import "main.scss";`,
    prependData: `@import "~@styles/config/variables.scss";`,
  },
};
