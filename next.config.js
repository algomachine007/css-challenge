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
    prependData: `
$white: #fff;
$opacity-primary: rgba(19, 129, 215, 0.12);
// box shadows
$box-shadow-primary: 0px 2px 8px rgba(0, 0, 0, 0.135216);
$box-shadow-purple: 0px 2px 8px rgba(29, 26, 206, 0.939);
$box-shadow-purple-2: 0px 2px 8px rgba(29, 26, 206, 0.574);

//width
$max-width: 1200px;
$max-width-over-page: 1440px;

$xsmall-and-up: "screen and (min-width : 480px)";
$small-and-up: "screen and (min-width : 576px)";
$tablet-and-up: "screen and (min-width: 768px)";
$large-and-up: "screen and (min-width : 992px)";
$ultra-and-up: "screen and (min-width : 1400px)";

$main-font: "Work Sans", sans-serif;
 
    $blue-primary: #032849;
  `,
  },
};
