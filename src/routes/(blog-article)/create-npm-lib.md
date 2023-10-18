## Create a library - Publish a npm package in Typescript

>To make some reusable codes, create and publish a npm package is a good idea.

Below I'll share base on my repo on github [chinese-poker](https://github.com/lizhiyu-me/chinese-poker).

## Init npm package
- create a directory
<code>mkdir your-package-name</code>
<code>cd your-package-name</code>
- make a initialization (-y means no prompt question and all question to be the defualt value)

<code>npm init -y</code>

Get a file tree like:
```
.
└── package.json
```

## Write codes down:

below is my code files tree:
```
src
├── Config.ts
├── Const.ts
├── MetaProcessor.ts
├── Ruler.ts
├── SpecificGetFn.ts
├── __tests__
│   └── ruler_spec.ts
└── utils
    └── utils.ts
```
### Intergrate code entry:
Make a file <code>index.ts</code> which we will assign it's path to the bundle config.
Input the stuffs you want to export:
```
//index.ts
export {Ruler} from "./Ruler";
export {E_TYPE} from "./Config";

```

## Bundle the codes:
It's nessary to make a bundle, for easy consuming. The bundle tool can resolve the module format like Commonjs and ESModule for different usage and help us transpile typescript file and generate <code>d.ts </code> file by some plugins.

>Rollup, Webpack, and Parcel are all module bundler tools, but the focus is different. The Rollup we are going to talk about is more suitable for building Library, while Webpack and Precel are more suitable for developing Application

Here We choose Rollup because it's clean and easy to use.

### Install  rollup
<code>npm i -D rollup</code>

### Create file <code>rollup.config.js</code>
``` javascript
import typescript from 'rollup-plugin-typescript2'; 
import babel from 'rollup-plugin-babel'; 
export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm', 
            sourcemap: true
        }
    ],
    plugins: [typescript(),babel()]
}
```

- <code>rollup-plugin-babel</code> for compile typescript.
- <code>rollup-plugin-typescript2</code> for generate <code>d.ts</code> file.
- set property <code>input</code>  as your entry file.
- set property <code>output</code>  to specify the output path and format.

### Set types and module in package.json
```
//package.json
{
...
"types": "index.d.ts",
"module": "index.esm.js",
...
}
```

### Run rollup
<code>rollup -c</code>

Then you can get the file tree  like below:
```
dist
├── Config.d.ts
├── Const.d.ts
├── MetaProcessor.d.ts
├── README.md
├── Ruler.d.ts
├── SpecificGetFn.d.ts
├── __tests__
│   └── ruler_spec.d.ts
├── index.d.ts
├── index.esm.js
├── index.esm.js.map
└── utils
    └── utils.d.ts
```

## Publish
- create a README.md file which is welcome for a easy describtion.
- copy README.md and package.json to dist.
- <code>npm login</code>(If you have't a npm account, get one [npmjs](https://www.npmjs.com/signup))
- <code>npm publish ./dist</code>

## Consuming the package:
<code>npm install your-package-name </code>

Use it just like other package you used to.


Thanks for your reading.

Have a good day.











