## The powerful and useful tool - NPM Scripts

>In the project which the series articles introduce, we should generate the script file from <code>.proto</code> file, debug by starting client and server process.  It's not convenient to excute the command repeatly. The solution to make development simple is config the commands in npm scripts.

### What is a npm script?

Npm allows scripting commands to be defined using the scripts field in the package.json file.

 ```
{
   // ...
   "scripts": {
     "build": "node build.js"
   }
}
```
The above code is a fragment of the package.json file, and the scripts field in it is an object. Each of its properties corresponds to a script. For example, the script corresponding to the build command is node build.js.

Use the npm run command from the command line to execute this script.

```
$ npm run build
# is equivalent to executing
$ node build.js
```
These scripts defined in package.json are called npm scripts. It has many advantages.

Project-related scripts can be centralized in one place.
Script commands of different projects can have the same external interface as long as they have the same function. We don't need to know how to test your project,  just run npm run test.
There are many helper functions that npm provides.
To view all npm script commands for the current project,  you can use the npm run command without any arguments.

```
$ npm run
```
---
Bellow is the <code>package.json</code> <code>scripts </code>section in my series article project:

``` json
"scripts": {
    "start-server": "ts-node server/index.ts",
    "start-client": "ts-node client/index.ts",
    "pbts": "./share/proto/protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_out=. ./share/proto/card-game.proto"
  },
```

Before I config the scripts section, I should input the command in my terminal everytime. Now, I just input <code>npm run start-server</code> to establish a server and <code>npm run start-client</code>  to run a client.

Npm scripts make my development easier and save much time for me.

We can do almost all build tasks with npm scripts,  if you have interests, read the reference to get more.

References: 

 [https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/） by Keith Cirkel

[https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html) by Ruanyifeng

