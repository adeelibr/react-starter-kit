# Documentation

Webapp Was Built In:

 * ReactJS
 * Redux
 * Webpack 4 
 * Babel 7
 * React Material UI
 * Bootstrap 4 
 * HMR
 * Code Splitting
 * Code Formatter (Prettier)
 * Eslint configured extended with Airbnb style guide & support for prettier


 How to start on PM2 [This is specific if you serve your files on a linux server where a NodeJS application is deployed as a server serving the .js files

```
 npm i
 node_modules/.bin/webpack --config webpack.prod.config.js --colors --progress
 node server
 PORT=8082 pm2 start server --name "app-name-to-deploy"
```