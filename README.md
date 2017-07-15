## webpack Intro 

## installation 

To create a new project you need to have 
*Node* and *NPM* installed on your system 

You can check if the two are installed by typing 

```bash 
 $ npm -v  # 4.1.2 or your curren version 

 $ node -v  # your current version 

```

create a project folder 

```bash 
    $ mkdir myProject && cd myProject 
```

Inside the myProject folder create two folder 

1. src : where all our coding files will reside
2. dist : where all bundled files will be minified and placed

Run the following command to create both directories.
```bash 

$ mkdir src dist

```

Our directory should look like this

```javascript

myProject
├── dist
└── src

```

## Install Webpack 

Before installing Webpack we need to create a Package.json. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

Initialize our package.json by running in the console

```javascript 
    $ npm init -y 

        /* {
    "name": "myProject",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    } */

```
Right now if you check inside your root directory you will see a `package.json` file that has been auto-created.
It should have the same info as the one printed on the console.

```javascript
// package.json
    {
    "name": "myProject",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    }


```



Next install Webpack by running 

```bash 

$ npm install --save -D webpack 

```
Open `package.json` and check if the new package has been installed under the [devDependecncies]('http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies')

```javascript


  "name": "webpack_tut",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": { 
    "webpack": "^2.5.1"   // webpack added 
  },
  "dependencies": {
    "webpack": "^2.5.1"
  },
  "description": ""
}


```


## Create entry point

webpack needs an entry point when bundling our files.
* ADD more info*

inside the `src` folder create `app.js` file and add the following code.

```javascript
# ./src/app.js
  
console.log('welcome to webpack');


```
For now `app.js` only prints  `welcome to webpack` to the console.


Let's test our webpack and see if it will package our app.js. 

For webpack to bundle our files it needs the 
1. entry/ source file ('app.js') and 
2. the destination where the bundled files will be kept
3. File name for the bundled file 

- Our source file will be `app.js` file
- Our destination will be  the `dist` folder
- We will name our output file bundle.js 

run the following command to bundle `app.js`

```javascript 
$ node_modules/webpack/bin/webpack.js ./src/app.js ./dist/bundle.js
    /*
    
    Hash: 9184728b3cf74ea9b462
Version: webpack 2.5.1
Time: 66ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.67 kB       0  [emitted]  main
   [0] ./src/app.js 34 bytes {0} [built]
    
    */


```
Note we used the webpack in our node_modules to bundle our files, you may also install webpack globally 
```javascript 
$ npm i -g webpack 

```
then run 

```javascript 

$ webpack.js ./src/app.js ./dist/bundle.js

```
If you check the project directory you will notice
- `bundle.js` file has been to our `dist` folder

```javascript
.
├── dist
│   └── bundle.js
├── package.json
└── src
    └── app.js


```
open the `./dist/bundle.js` and view it's contents. Towards the end of the file you will notice it contains our welcome message has been included in the bundle.

```javascript
# ./dist/bundle.js
...

/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

console.log('welcome to webpack');

/***/ })
/******/ ]);
...


```
### Minify the bundle

In production we need to minify our code 


To minify our code we add `-p` flag to our code 

```javascript
$ node_modules/webpack/bin/webpack.js ./src/app.js ./dist/bundle.js -p
 
 /*
    Hash: 3648db356a0afbe04804
Version: webpack 2.5.1
Time: 120ms
    Asset       Size  Chunks             Chunk Names
bundle.js  538 bytes       0  [emitted]  main
   [0] ./src/app.js 35 bytes {0} [built]
*/

```

Notice how the bundle shrunk in size from `2.67 kB` to  `538 bytes`.
** Why we minify for production **

This is how the our `bundle.js` looks like 

```javascript
!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n){console.log("welcome to webpack")}]);

```
## watch 

To watch for any changes made to `app.js` we simply add the `--watch` flag to our command. The `--watch` flag activate webpacks watch mode, which keeps webpack running and enables automatic updating of the bundle.js.

Run the following command in the console

```javascript
$ node_modules/webpack/bin/webpack.js ./src/app.js ./dist/bundle.js --watch
    /*
    Webpack is watching the files…

Hash: 3648db356a0afbe04804
Version: webpack 2.5.1
Time: 75ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.67 kB       0  [emitted]  main
   [0] ./src/app.js 35 bytes {0} [built]
Hash: 0da540d74b202cd37e9a
Version: webpack 2.5.1
Time: 17ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.68 kB       0  [emitted]  main
   [0] ./src/app.js 41 bytes {0} [built]

    */

```
Next make a change to the `app.js` file and save. You will notice webpack will automatically bundle  `app.js` each time you make a change and save and the results will bedisplayed on the console.


## Webpack Config

Until now we have been running webpack in the console, which means we have to type the same code each time we want to bundle our files. This becomes tiresome and repetitive. Luckily all the commands we have just run in our terminal can be put in a config file.

## creating a config file 
- In the root project folder create a `webpack.config.js` file
- open and add the following code

```javascript
// ./webpack.config.js

module.exports = {
    entry : './src/app.js',          //  Entry file
    output:  {
        filename : './dist/bundle.js'  // output file destination and filename
    }
}


```
The above code export an object with our settings.
The object has the following properties
- entry : this takes a string or an array of our entry file(s) as value
- output : takes an object containing the full path of destination folder and filename of the output file

We now need to make our webpack in run development mode and watch for any changes.

Open `package.json` and under the scripts property add a custom script, lets call it 'dev' this will run the script 

`webpack -d --watch`

    - `-d` flag makes webpack run in development mode and 
    - --watch flag keeps webpack alive to monitor for any changes.

Our `package.json` should look like this.

```javascript


  "name": "webpack_tut",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev":"webpack -d --watch",     // Add this code
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...

```

### running webpack with config

Let us run our script in the terminal.

In the terminal type the following command.

```javascript

$ npm run dev

/* 
> webpack -d --watch


Webpack is watching the files…

Hash: 1e614bc6bd037ef80286
Version: webpack 2.5.1
Time: 77ms
           Asset     Size  Chunks             Chunk Names
./dist/bundle.js  3.25 kB       0  [emitted]  main
   [0] ./src/app.js 41 bytes {0} [built]
   
   */

```
