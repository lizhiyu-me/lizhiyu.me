## Utilize Parcel  To Enjoy  TypeScrpit Out Of The Box

>If you are code with TypeScript mostly, you may counter some hassles when running or debugging with tranditional web tools. Parcel may be the hassles killer.

- Zero config with parcel index.html

- Debug TS with soure map

- Hot reloading

and more amazing features [https://parceljs.org/](https://parceljs.org/).

- `mkdir parcel--starter-demo`

- `cd ./parcel--starter-demo`

- `yarn init -y ` || `npm init -y`

- `yarn add parcel --dev` || `npm install -D parcel`

- `touch main.ts`

```typescript
let content_string:string = "Hello Parcel!";
document.getElementById("content")!.innerHTML = content_string;
```

`touch index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="content"></div>
</body>
<script src="./main.ts" type="moudule"></script>
</html>
```

```json
{
  "name": "parcel-demo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev":"parcel ./index.html"
  },
  "dependencies": {
    "parcel": "^2.7.0"
  }
}
```

`yarn start` || `npm run start`

So easy, is it?

Enjoy coding.