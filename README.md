http://hex-works.com
==========

HTML5 online hex editor, using Canvas for rendering and AngularJS.

Using some code from https://github.com/mikach/hex-editor, but rewritten renedering engine from scratch.


To start development, you will need NodeJS > 6.0

clone repository, install required libraries
```
cd hex-works
npm install
npm install -g webpack-dev-server
```

To build files to dist folder
```
npm run build
```

To start development server, run
```
webpack serve
```
editor will be live at localhost:8080


Start node web server
```
node server.js
```
editor will be live at localhost:3000

