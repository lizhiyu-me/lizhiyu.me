---
title: Get Enums (Enumerations) In Javascript | Using JS Doc
slug: enum-js
coverImage: /images/posts/blog-posts.jpg
date: 2021-05-10T21:55:15.361Z
excerpt:
tags:
---
## Get Enums (Enumerations) In Javascript | Using JS Doc

>When I write javascript, I encounter a problem that there is no enum in javascript, and I accustomed to use enum to organise my code when write typescript. So I want to get a resolution to use enum in javascript.

#### What you can get:
- Enum in javascript
- Intellisense in IDE

### What tsc do, when compile ts to js with enum.
```
//.ts
enum E1{
    A,B,C
}
```

```
//.js
var E1;
(function (E1) {
    E1[E1["A"] = 0] = "A";
    E1[E1["B"] = 1] = "B";
    E1[E1["C"] = 2] = "C";
})(E1 || (E1 = {}));
```

### Define a function to generate enum like tsc
```
//generateEnum.mjs
export default function generateEnum(protoArr) {
    let _enum = {};
    for (let i = 0; i < protoArr.length; i++) {
        const _protoName = protoArr[i];
        const _cmdID = i;
        _enum[_enum[_protoName] = _cmdID] = _protoName;
    }
    return _enum;
}
``` 

### Define a enum in <code>d.ts</code>
```
//type.d.ts
export interface ENUM_CMD_FN {
    ready_C2S,
    dealCards_S2C,
    competeForLandLordRole_C2S,
    playTurn,
    playCards_C2S,
    playCards_S2C,
    notAllowedByRule_S2C,
    gameEnd_S2
}
```

### Import and define type in javascript
```
/**
 * @typedef {import("./type").ENUM_CMD_FN} ENUM_CMD_FN 
 */
```

### Type and get your enum variable
```
import generateEnum from "./generateEnum.mjs"
/** 
 * @type ENUM_CMD_FN
 */
const ENUM_CMD_FN = generateEnum(
    [
        "ready_C2S",
        "dealCards_S2C",
        "competeForLandLordRole_C2S",
        "playTurn",
        "playCards_C2S",
        "playCards_S2C",
        "notAllowedByRule_S2C",
        "gameEnd_S2C"
    ]);
```

Then,  the same as typescript.

![enum-gif.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1647939621415/S1EmPUiOo.gif)

If you want to get the codes above, check the [demo code](https://github.com/lizhiyu-me/js-enum-generator) .

Thanks for your reading.

Have a nice day.